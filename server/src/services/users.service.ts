import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RegisterDTO } from 'src/dto/user/Register.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: RegisterDTO) {
    const userInDb = await this.prisma.user.findFirst({
      where: { OR: [{ email: userDto.email }, { username: userDto.username }] },
    });

    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const salt = await genSalt();
    await this.prisma.user.create({
      data: { ...userDto, password: await hash(userDto.password, salt) },
    });

    throw new HttpException('User created', HttpStatus.CREATED);
  }

  async getUserByUsername(username: string) {
    const user = await this.prisma.user.findFirst({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
