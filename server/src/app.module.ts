import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { SEC_60 } from './constants';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [configuration] }),
    CacheModule.register({ isGlobal: true, ttl: SEC_60 }),
    FilmsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
