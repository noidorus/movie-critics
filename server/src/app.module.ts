import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [configuration] }),
    FilmsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
