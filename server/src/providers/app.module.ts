import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase.module';
import { HttpModule } from '@nestjs/axios';
import { FilmsController } from 'src/controllers/films.controller';
import { KinopoiskService } from 'src/services/kinopoisk.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    FirebaseModule,
  ],
  controllers: [FilmsController],
  providers: [KinopoiskService],
})
export class AppModule {}
