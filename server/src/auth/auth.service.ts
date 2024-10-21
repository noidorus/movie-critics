import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto';
import { JwtConfig, JwtPayload, JwtCookie } from './interfaces';
import { TypedConfigService } from 'src/config/typed-config.service';

@Injectable()
export class AuthService {
  private readonly jwt: JwtConfig;
  private readonly refreshJwt: JwtConfig;

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    readonly configService: TypedConfigService,
  ) {
    this.jwt = configService.get('jwt');
    this.refreshJwt = configService.get('refreshJwt');
  }

  async register(userDto: RegisterDTO): Promise<void> {
    try {
      await this.userService.create(userDto).then(() => {
        throw new HttpException('User created', HttpStatus.CREATED);
      });
    } catch (err) {
      throw err;
    }
  }

  async validateCredentials(
    username: string,
    value: string,
    hashedValueKey: 'password' | 'refreshToken',
  ) {
    try {
      const user = await this.userService.getUserByUsername(username);

      const areEqual = await compare(value, user[hashedValueKey]);

      if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
      }

      return user;
    } catch {
      throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
    }
  }

  createAccessToken({ username }: JwtPayload): JwtCookie {
    return this._createToken({ username }, this.jwt);
  }

  async logout(username: string): Promise<[string, string]> {
    await this.userService.removeRefreshToken(username);

    return [this.jwt.name, this.refreshJwt.name];
  }

  async createRefreshToken({ username }: JwtPayload): Promise<JwtCookie> {
    try {
      const token = this._createToken({ username }, this.refreshJwt);
      await this.userService.setRefreshToken(username, token.token);
      return token;
    } catch (err) {
      throw err;
    }
  }

  private _createToken({ username }: JwtPayload, { expHours, secret, name }: JwtConfig): JwtCookie {
    const user: JwtPayload = { username };
    const maxAge = expHours * 60 * 60 * 1000; // convert minutes to milliseconds
    const token = this.jwtService.sign(user, { expiresIn: maxAge, secret });

    return { token, maxAge, name };
  }
}
