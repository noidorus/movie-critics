import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserEntity } from 'src/user/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto';
import { RequestWithUser } from './interfaces';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { LocalAuthGuard, JwtAuthGuard, JwtRefreshGuard } from './guards';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({ status: 201, description: 'User created' })
  @Post('register')
  async signUp(@Body() userDto: RegisterDTO) {
    return await this.authService.register(userDto);
  }

  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200, description: 'User logged in', type: UserEntity })
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
  @ApiResponse({ status: 200, description: 'User logged out' })
  @Get('logout')
  async logout(@Res({ passthrough: true }) res: Response, @Req() req: RequestWithUser) {
    const cookieNames = await this.authService.logout(req.user.username);

    for (const name of cookieNames) {
      res.clearCookie(name);
    }

    throw new HttpException('User logged out', HttpStatus.OK);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'User authenticated', type: UserEntity })
  @Get()
  async authentificate(@Req() req: RequestWithUser): Promise<UserEntity> {
    return new UserEntity(req.user);
  }

  @UseGuards(JwtRefreshGuard)
  @ApiResponse({ status: 200, description: 'Access token updated', type: UserEntity })
  @Get('refresh')
  async refresh(@Res({ passthrough: true }) res: Response, @Req() req: RequestWithUser) {
    const { user } = req;

    const { name, token, maxAge } = this.authService.createAccessToken({ username: user.username });
    res.cookie(name, token, { httpOnly: true, maxAge });

    return new UserEntity(user);
  }
}
