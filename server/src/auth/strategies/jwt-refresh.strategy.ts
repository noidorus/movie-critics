import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from '@prisma/client';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../interfaces';
import { TypedConfigService } from 'src/config/typed-config.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
  constructor(
    readonly configService: TypedConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.refresh_jwt;
        },
      ]),
      secretOrKey: configService.get('refreshJwt').secret,
      passReqToCallback: true,
    });
  }

  async validate(request: Request, { username }: JwtPayload): Promise<User> {
    return this.authService.validateCredentials(
      username,
      request.cookies?.refresh_jwt,
      'refreshToken',
    );
  }
}
