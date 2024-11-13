import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, FilmsModule, ListsModule, CommentsModule } from './modules';
import config from './config/config';
import { validate } from './config/config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [config], validate }),
    FilmsModule,
    AuthModule,
    ListsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
