import { ApiProperty } from '@nestjs/swagger';
import { User, Role } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'user123' })
  username: string;

  @ApiProperty({ example: 'pXwQ8@example.com' })
  email: string;

  @ApiProperty({ example: Role.CLIENT })
  role: Role;

  @ApiProperty({ example: new Date() })
  createdAt: Date;

  @ApiProperty({ example: new Date() })
  updatedAt: Date;

  @Exclude()
  password: string;
}
