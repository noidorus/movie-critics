import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ChangeListVisibilityDTO {
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true, required: true, description: 'List visibility' })
  private: boolean;
}
