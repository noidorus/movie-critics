import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true });
  app.use(cookieParser());
  app.enableShutdownHooks();

  const config = new DocumentBuilder()
    .setTitle('Movie Critics API')
    .setDescription('The movie critics API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001, () => {
    console.log('Server listening on', 'http://localhost:3001');
  });
}
bootstrap();
