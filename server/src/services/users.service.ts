import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateUserDTO } from 'src/dto/user/CreateUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: CreateUserDTO) {
    const userInDb = await this.prisma.user.findFirst({
      where: { OR: [{ email: userDto.email }, { username: userDto.username }] },
    });

    if (userInDb) {
      throw new HttpException('user_already_exist', HttpStatus.CONFLICT);
    }

    return await this.prisma.user.create({
      data: { ...userDto, password: await hash(userDto.password, 10) },
    });
  }
}
