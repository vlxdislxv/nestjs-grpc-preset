import { Controller, Get, Inject } from '@nestjs/common';
import { Hi, Service } from '../../../../proto/service';

@Controller('service')
export class ServiceController {
  constructor(@Inject('SERVICE') private readonly service: Service) {}

  @Get()
  public get(): Promise<Hi> {
    return this.service.get({});
  }
}
