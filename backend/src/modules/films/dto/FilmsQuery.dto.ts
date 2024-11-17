import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional } from 'class-validator';

export class FilmsQueryDTO {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false, format: 'int32', description: 'Default: 1' })
  page?: number;

  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false, format: 'int32', description: 'Default: 10' })
  limit?: number;
}
