import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Matches, MinLength, MaxLength } from 'class-validator';

export class RegisterDTO {
  @ApiProperty({ minLength: 6, maxLength: 20, description: 'Aa-Zz, 0-9, 6-20 characters' })
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^[0-9A-Za-z]{6,20}$/)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
