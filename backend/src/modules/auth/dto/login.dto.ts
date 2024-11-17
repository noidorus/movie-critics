import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ type: String, example: 'user123', required: true })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String, example: 'Password-123', required: true })
  @IsNotEmpty()
  password: string;
}
