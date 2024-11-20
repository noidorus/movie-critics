import { JwtConfig } from 'src/modules/auth/auth.intrfaces';

export interface EnvConfig {
  sentryDsn: string;
  clientUrl: string;
  port: number;
  jwt: JwtConfig;
  refreshJwt: JwtConfig;
  databaseUrl: string;
  omdbApiUrl: string;
}
