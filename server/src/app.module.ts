import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FilmsModule } from './films/films.module';
import config from './config/config';
import { ListsModule } from './lists/lists.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [config] }),
    FilmsModule,
    AuthModule,
    ListsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
