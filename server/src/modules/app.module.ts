import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase.module';
import { FilmsController } from 'src/controllers/films.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { SEC_60 } from 'src/constants/constants';
import { AuthModule } from './auth.module';

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
