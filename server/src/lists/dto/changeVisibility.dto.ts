import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class ChangeListVisibilityDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1, required: true, description: 'List ID' })
  id: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true, required: true, description: 'List visibility' })
  private: boolean;
}
