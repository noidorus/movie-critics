import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class NullableJwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: unknown | null, user: any) {
    if (err || !user) {
      return null;
    }

    return user;
  }
}
