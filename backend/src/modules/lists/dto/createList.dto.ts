import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateListDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'My list', required: true, description: 'List name' })
  name: string;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: true, default: false, required: false, description: 'List description' })
  private?: boolean;
}
