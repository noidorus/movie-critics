import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RegisterDTO } from 'src/dto/user/Register.dto';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: RegisterDTO): Promise<User> {
    try {
      return await this.prisma.user.create({ data: userDto });
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
}
