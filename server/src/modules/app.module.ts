import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
