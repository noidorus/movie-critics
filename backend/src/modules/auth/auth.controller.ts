import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserEntity } from 'src/services/user/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto';
import { RequestWithUser } from './auth.intrfaces';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard, JwtAuthGuard, JwtRefreshGuard } from './guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'User created' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.CONFLICT, description: 'User already exists' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('register')
  async signUp(@Body() dto: RegisterDTO) {
    return await this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User logged in',
    type: UserEntity,
    headers: { 'Set-Cookie': { description: 'Access and refreshAccess session cookie' } },
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Invalid credentials' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginDTO })
  @Post('login')
  async login(
    @Res({ passthrough: true }) res: Response,
    @Req() req: RequestWithUser,
  ): Promise<UserEntity> {
    const { user } = req;
    const { name, token, maxAge } = this.authService.createAccessToken({ username: user.username });

    res.cookie(name, token, { httpOnly: true, maxAge });

    await this.authService
      .createRefreshToken({ username: user.username })
      .then(({ name, token, maxAge }) => {
        res.cookie(name, token, { httpOnly: true, maxAge });
      });

    return new UserEntity(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'User logged out' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('logout')
  async logout(@Res({ passthrough: true }) res: Response, @Req() req: RequestWithUser) {
    const cookieNames = await this.authService.logout(req.user.username);

    for (const name of cookieNames) {
      res.clearCookie(name);
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user data' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Authentificated user', type: UserEntity })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get()
  async authentificate(@Req() req: RequestWithUser): Promise<UserEntity> {
    return new UserEntity(req.user);
  }

  @UseGuards(JwtRefreshGuard)
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({
    status: 200,
    description: 'Access token updated',
    type: UserEntity,
    headers: { 'Set-Cookie': { description: 'Access session cookie' } },
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Something went wrong' })
  @Get('refresh')
  async refresh(@Res({ passthrough: true }) res: Response, @Req() req: RequestWithUser) {
    const { user } = req;

    const { name, token, maxAge } = this.authService.createAccessToken({ username: user.username });

    res.cookie(name, token, { httpOnly: true, maxAge });

    return new UserEntity(user);
  }
}
