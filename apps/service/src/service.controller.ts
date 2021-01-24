import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ServiceService } from './service.service';

@Controller()
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @GrpcMethod('Service', 'get')
  getHello(): string {
    return this.serviceService.getHello();
  }
}
