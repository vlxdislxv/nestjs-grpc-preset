import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hi, ServiceController as ServiceControllerImpl } from 'proto/service';
import { ServiceService } from './service.service';

@Controller()
export class ServiceController implements ServiceControllerImpl {
  constructor(private readonly serviceService: ServiceService) {}

  @GrpcMethod('Service', 'get')
  get(): Hi {
    return this.serviceService.get();
  }
}
