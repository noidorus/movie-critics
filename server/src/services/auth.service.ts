import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from './users.service';
import { LoginUserDTO, RegisterDTO } from 'src/dto/user';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/interfaces/jwtPayload.interface';
import { UserResponseDTO } from 'src/dto/user/UserResponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: RegisterDTO) {
    return this.usersService.create(userDto);
  }

  async login({ username, password }: LoginUserDTO) {
    try {
      const user = await this.usersService.getUserByUsername(username);
      const areEqual = await compare(password, user.password);

      if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      const token = this._createToken(user);

      return { user, token };
    } catch {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async validateUser({ username }: JwtPayload): Promise<UserResponseDTO> {
    try {
      const user = await this.usersService.getUserByUsername(username);
      return new UserResponseDTO(user);
    } catch {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }

  private _createToken({ username, email }: JwtPayload) {
    const user: JwtPayload = { username, email };
    return this.jwtService.sign(user);
  }
}
