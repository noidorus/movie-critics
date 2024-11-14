import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule, FilmsModule, ListsModule, CommentsModule } from './modules';
import config from './config/config';
import { SentryModule } from '@sentry/nestjs/setup';
import { validate } from './config/config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [config], validate }),
    SentryModule.forRoot(),
    FilmsModule,
    AuthModule,
    ListsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
