import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PositiveNumberValidationPipe implements PipeTransform {
  async transform(value: number | string) {
    const number = Number(value);
    if (Number.isNaN(number) || number <= 0) {
      throw new BadRequestException(`${value} is not a positive number`);
    }
    return number;
  }
}
