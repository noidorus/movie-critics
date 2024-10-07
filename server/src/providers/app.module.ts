import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase.module';
import { HttpModule } from '@nestjs/axios';
import { FilmsController } from 'src/controllers/films.controller';
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    FirebaseModule,
  ],
  controllers: [FilmsController],
  providers: [],
})
export class AppModule {}
