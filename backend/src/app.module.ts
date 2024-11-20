import rTracer from 'cls-rtracer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SentryModule } from '@sentry/nestjs/setup';
import { AuthModule, FilmsModule, ListsModule, CommentsModule } from './modules';
import config from './config/config';
import { validate } from './config/config.validation';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggerModule } from 'nestjs-pino';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [config], validate }),
    SentryModule.forRoot(),
    PrometheusModule.register(),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',
        formatters: { level: (label) => ({ level: label }) },
        mixin: () => ({ reqId: rTracer.id() }),
        transport: { target: 'pino-pretty', options: { colorize: true, ignore: 'pid,hostname' } },
      },
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'static') }),
    FilmsModule,
    AuthModule,
    ListsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
