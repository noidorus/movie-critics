import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import configuration from './config/configuration';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [configuration] }),
    FilmsModule,
    AuthModule,
    ListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
