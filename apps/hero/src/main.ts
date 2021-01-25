import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HERO_URL, HERO_PROTO } from '@app-core/providers';
import { HERO_PACKAGE_NAME } from 'proto/hero';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroModule,
    {
      transport: Transport.GRPC,
      options: {
        package: HERO_PACKAGE_NAME,
        url: HERO_URL,
        protoPath: HERO_PROTO,
      },
    },
  );

  app.listenAsync();
}

bootstrap();
