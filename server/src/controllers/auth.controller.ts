import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { RegisterDTO } from 'src/dto/user/Register.dto';
import { AuthService } from 'src/services/auth.service';
import { LoginUserDTO } from 'src/dto/user';
import { Response } from 'express';
import { UserEntity } from 'src/entities/User.entity';
import JwtAuthGuard from 'src/guards/jwt-auth.guard';
import { RequestWithUser } from 'src/interfaces/requestWithUser.interface';

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
    @Body() userDto: LoginUserDTO,
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
