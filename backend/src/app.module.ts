import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, FilmsModule, ListsModule, CommentsModule } from './modules';
import config from './config/config';

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
