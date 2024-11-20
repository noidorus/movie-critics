import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class FilmsQueryDTO {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @ApiProperty({ required: false, format: 'int32', default: 1 })
  page?: number;

  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ required: false, format: 'int32', default: 10 })
  limit?: number;
}
