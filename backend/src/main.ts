import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { TypedConfigService } from './config/typed-config.service';
import { initSentry, SentryInterceptor } from './sentry';
import { Logger } from 'nestjs-pino';
import rTracer from 'cls-rtracer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const configService = app.get(TypedConfigService);

  initSentry(configService.get('sentryDsn'));
  app.useGlobalInterceptors(new SentryInterceptor());
  app.use(rTracer.expressMiddleware());

  app.enableCors({ origin: configService.get('clientUrl'), credentials: true });
  app.use(cookieParser());
  app.enableShutdownHooks();
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.setGlobalPrefix('api');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Movie Critics API')
    .setDescription('The movie critics API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const port = configService.get('port');
  await app.listen(port, () => {
    console.log('Server listening on', `http://localhost:${port}`);
  });
}
bootstrap();
