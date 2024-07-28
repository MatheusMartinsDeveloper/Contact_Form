import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "POST,GET,PUT,DELETE",
    credentials: true
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(1313);
}
bootstrap();