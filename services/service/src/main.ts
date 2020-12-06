import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SERVICE_PACKAGE, SERVICE_URL, SERVICE_PROTO } from '@app-core/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: SERVICE_PACKAGE,
        url: SERVICE_URL,
        protoPath: SERVICE_PROTO,
      },
    },
  );
  app.listenAsync();
}
bootstrap();
