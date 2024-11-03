import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: 'text', required: true, description: 'Comment text' })
  text: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number, example: 1, required: true, description: 'Film id' })
  filmId: number;
}
