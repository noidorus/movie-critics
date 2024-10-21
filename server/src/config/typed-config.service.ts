import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './configuration';

@Injectable()
export class TypedConfigService {
  constructor(private configService: ConfigService) {}

  get<T extends keyof EnvConfig>(propertyPath: T): EnvConfig[T] {
    return this.configService.get(propertyPath);
  }
}
