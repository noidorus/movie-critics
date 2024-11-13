import { plainToClass } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  CLIENT_URL: string;

  @IsString()
  DATABASE_URL: string;

  @IsString()
  JWT_NAME: string;

  @IsString()
  JWT_SECRET: string;

  @IsNumber()
  JWT_EXP_HOURS: number;

  @IsString()
  REFRESH_JWT_NAME: string;

  @IsString()
  REFRESH_JWT_SECRET: string;

  @IsNumber()
  REFRESH_JWT_EXP_HOURS: number;

  @IsString()
  OMDB_API_URL_WITH_KEY: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
