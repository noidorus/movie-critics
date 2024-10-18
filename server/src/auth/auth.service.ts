import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { JwtPayload } from 'src/auth/interfaces/jwtPayload.interface';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO, LoginDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: RegisterDTO) {
    const hashedPassword = await hash(userDto.password, await genSalt());
    return await this.usersService.create({ ...userDto, password: hashedPassword });
  }

  async login({ username, password }: LoginDTO) {
    try {
      const user = await this.usersService.getUserByUsername(username);
      const areEqual = await compare(password, user.password);

      if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
      }
      const token = this._createToken(user);

      return { user, token };
    } catch {
      throw new HttpException('Invalid credentials', HttpStatus.FORBIDDEN);
    }
  }

  async validateUser({ username }: JwtPayload): Promise<User> {
    try {
      return await this.usersService.getUserByUsername(username);
    } catch {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  private _createToken({ username, email }: JwtPayload) {
    const user: JwtPayload = { username, email };
    return this.jwtService.sign(user);
  }
}
