import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterDTO } from 'src/dto/user/Register.dto';
import { AuthService } from 'src/services/auth.service';

import { LoginUserDTO } from 'src/dto/user';
import { Response } from 'express';
import { UserResponseDTO } from 'src/dto/user/UserResponse.dto';

@Controller('api/auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  signUp(@Body() userDto: RegisterDTO) {
    return this.authService.register(userDto);
  }

  @Post('login')
  async login(@Body() userDto: LoginUserDTO, @Res({ passthrough: true }) res: Response) {
    const { token, user } = await this.authService.login(userDto);
    res.cookie('jwt', token, { httpOnly: true });
    return new UserResponseDTO(user);
  }
}
