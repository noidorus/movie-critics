import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateCommentDTO {
  @ApiProperty({ type: String, example: 'text', required: true })
  @IsString()
  @Length(1, 400)
  text: string;

  @ApiProperty({ type: Number, example: 1, required: true })
  @IsNumber()
  @IsNotEmpty()
  filmId: number;
}
