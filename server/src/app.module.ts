import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { FirebaseModule } from './firebase/firebase.module';
import { FilmsController } from './films/films.controller';
import { SEC_60 } from './constants/constants';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    CacheModule.register({ isGlobal: true, ttl: SEC_60 }),
    FirebaseModule,
    AuthModule,
  ],
  controllers: [FilmsController],
  providers: [],
})
export class AppModule {}
