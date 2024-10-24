import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class RateFilmBodyDTO {
  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  rating: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  filmId: number;
}
