import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserEntity } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto';
import { RequestWithUser } from './interfaces';
import JwtAuthGuard from './jwt-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async signUp(@Body() userDto: RegisterDTO) {
    const user = await this.authService.register(userDto);
    return new UserEntity(user);
  }

  @Post('login')
  async login(
    @Body() userDto: LoginDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<UserEntity> {
    const { token, user } = await this.authService.login(userDto);

    res.cookie('jwt', token, { httpOnly: true });

    return new UserEntity(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async authentificate(@Req() req: RequestWithUser): Promise<UserEntity> {
    const { user } = req;
    return new UserEntity(user);
  }
}
