import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import configuration from './config/configuration';
import { ListsModule } from './lists/lists.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [configuration] }),
    FilmsModule,
    AuthModule,
    ListsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
