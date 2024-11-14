import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class EditCommentDTO {
  @ApiProperty({ type: String, example: 'text', required: true })
  @IsString()
  @Length(1, 400)
  text: string;
}
