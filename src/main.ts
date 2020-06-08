import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: { retryAttempts: 5, retryDelay: 1000 },
  });
  await app.listen(3000);
}
bootstrap();
