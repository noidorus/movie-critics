import { EnvConfig } from './config.interface';

export default (): EnvConfig => ({
  clientUrl: process.env.CLIENT_URL,
  port: +process.env.PORT,
  sentryDsn: process.env.SENTRY_DSN,
  jwt: {
    name: process.env.JWT_NAME,
    secret: process.env.JWT_SECRET,
    expHours: +process.env.JWT_EXP_HOURS,
  },
  refreshJwt: {
    name: process.env.REFRESH_JWT_NAME,
    secret: process.env.REFRESH_JWT_SECRET,
    expHours: +process.env.REFRESH_JWT_EXP_HOURS,
  },
  omdbApiUrl: process.env.OMDB_API_URL_WITH_KEY,
  databaseUrl: process.env.DATABASE_URL,
});
