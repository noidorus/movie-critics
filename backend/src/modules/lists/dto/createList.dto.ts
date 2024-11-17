import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class CreateListDTO {
  @ApiProperty({ example: 'My list', required: true, description: 'List name' })
  @Length(1, 30)
  @IsString()
  name: string;

  @ApiProperty({ example: true, default: false, required: false, description: 'List description' })
  @IsOptional()
  @IsBoolean()
  private?: boolean;
}
