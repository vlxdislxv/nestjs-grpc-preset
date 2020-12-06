import { ServiceProvider } from '@app-core/core';
import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';

@Module({
  controllers: [ServiceController],
  providers: [ServiceProvider],
})
export class ServiceModule {}
