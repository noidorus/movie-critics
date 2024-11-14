import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ChangeListVisibilityDTO {
  @ApiProperty({ example: true, required: true, description: 'List visibility' })
  @IsBoolean()
  @IsNotEmpty()
  private: boolean;
}
