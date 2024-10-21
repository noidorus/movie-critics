import { JwtConfig } from 'src/auth/interfaces';

export default (): EnvConfig => ({
  jwt: {
    name: process.env.JWT_NAME || 'jwt',
    secret: process.env.JWT_SECRET || 'secret',
    expHours: +process.env.JWT_EXP_HOURS || 0.5,
  },
  refreshJwt: {
    name: process.env.REFRESH_JWT_NAME || 'refresh_jwt',
    secret: process.env.REFRESH_JWT_SECRET || 'secret',
    expHours: +process.env.REFRESH_JWT_EXP_HOURS || 24,
  },
  databaseUrl: process.env.DATABASE_URL,
});

export interface EnvConfig {
  jwt: JwtConfig;
  refreshJwt: JwtConfig;
  databaseUrl: string;
}
