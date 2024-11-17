import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prismaDB/prisma.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: CreateUserDTO): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: { ...userDto, password: await hash(userDto.password, await genSalt()) },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }
      }

      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async setRefreshToken(username: string, token: string) {
    try {
      const refreshToken = await hash(token, await genSalt());
      await this.prisma.user.update({ where: { username }, data: { refreshToken } });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeRefreshToken(username: string) {
    try {
      await this.prisma.user.update({ where: { username }, data: { refreshToken: null } });
    } catch {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
