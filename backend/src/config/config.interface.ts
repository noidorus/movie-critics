import { JwtConfig } from 'src/auth/auth.intrfaces';

export interface EnvConfig {
  jwt: JwtConfig;
  refreshJwt: JwtConfig;
  databaseUrl: string;
  omdbApiKey: string;
}
