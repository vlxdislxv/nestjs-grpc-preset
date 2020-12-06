import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'service',
        url: 'localhost:3001',
        protoPath: join(__dirname, '..', 'proto/service.proto'),
      },
    },
  );
  app.listenAsync();
}
bootstrap();
