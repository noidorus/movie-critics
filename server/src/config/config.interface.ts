import { JwtConfig } from 'src/auth/interfaces';

export interface EnvConfig {
  jwt: JwtConfig;
  refreshJwt: JwtConfig;
  databaseUrl: string;
  omdbApiKey: string;
}
