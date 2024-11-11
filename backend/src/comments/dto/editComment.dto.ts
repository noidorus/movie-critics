import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EditCommentDTO {
  @ApiProperty({ example: 'text', required: true, description: 'Comment text' })
  @IsString()
  @IsNotEmpty()
  text: string;
}
