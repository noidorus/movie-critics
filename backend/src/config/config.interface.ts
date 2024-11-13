import { JwtConfig } from 'src/modules/auth/auth.intrfaces';

export interface EnvConfig {
  jwt: JwtConfig;
  refreshJwt: JwtConfig;
  databaseUrl: string;
  omdbApiKey: string;
}
