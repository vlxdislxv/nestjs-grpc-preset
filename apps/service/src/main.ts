import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SERVICE_PACKAGE, SERVICE_URL, SERVICE_PROTO } from '@app-core/core';
import { ServiceModule } from './service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceModule,
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
