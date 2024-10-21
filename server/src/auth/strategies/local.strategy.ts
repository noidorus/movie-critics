import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      name: 'user',
      usernameField: 'username',
    });
  }

  async validate(username: string, password: string): Promise<User> {
    return await this.authService.validateCredentials(username, password, 'password');
  }
}
