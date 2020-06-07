import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: { hostname: '78.83.158.151', port: 1833, retryAttempts: 5, retryDelay: 1000 },
  });
  await app.listen(3000);
}
bootstrap();
