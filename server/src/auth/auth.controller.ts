import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserEntity } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto';
import { RequestWithUser } from './interfaces';
import JwtAuthGuard from './jwt-auth.guard';
import { ApiResponse } from '@nestjs/swagger';
// import { ApiOkResponse } from '@nestjs/swagger';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 201, description: 'User created' })
  async signUp(@Body() userDto: RegisterDTO) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  @ApiResponse({ status: 200, description: 'User logged in', type: UserEntity })
  async login(
    @Body() userDto: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<UserEntity> {
    const { token, user } = await this.authService.login(userDto);

    res.cookie('jwt', token, { httpOnly: true });

    return new UserEntity(user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'User logged in', type: UserEntity })
  @Get()
  async authentificate(@Req() req: RequestWithUser): Promise<UserEntity> {
    const { user } = req;
    return new UserEntity(user);
  }
}
