import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';

export class RegisterDTO {
  @ApiProperty({
    type: String,
    example: 'user123',
    minLength: 6,
    maxLength: 30,
    required: true,
    pattern: '/^[0-9A-Za-z]{6,20}$/',
  })
  @Matches(/^[0-9A-Za-z]{6,20}$/)
  username: string;

  @ApiProperty({
    type: String,
    example: 'email@example.com',
    required: true,
    pattern: '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/',
  })
  @IsEmail()
  @Matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
  email: string;

  @ApiProperty({
    type: String,
    example: 'Password-123',
    required: true,
    pattern: '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/',
  })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
  password: string;
}
