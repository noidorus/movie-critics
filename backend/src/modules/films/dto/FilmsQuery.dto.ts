import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, Min } from 'class-validator';

export class FilmsQueryDTO {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false, format: 'int32', default: 1 })
  @Min(1)
  page?: number;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false, format: 'int32', default: 10 })
  @Min(1)
  limit?: number;
}
