import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Hi, ServiceClient } from '../../../../proto/service';

@Controller('service')
export class ServiceController {
  constructor(@Inject('SERVICE') private readonly service: ServiceClient) {}

  @Get()
  public get(): Hi | Observable<Hi> {
    return this.service.get({});
  }
}
