import { User } from '@prisma/client';

export interface JwtConfig {
  name: string;
  secret: string;
  expHours: number;
}

export interface JwtCookie {
  name: string;
  token: string;
  maxAge: number;
}

export interface JwtPayload {
  username: string;
}

export interface RequestWithUser extends Request {
  user: User;
}

export interface RequestWithNullableUser extends Request {
  user?: User;
}
