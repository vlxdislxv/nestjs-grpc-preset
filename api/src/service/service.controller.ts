import { Controller, Get, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Service } from '../../proto/service';
import { Message } from './core/models/message.model';

@Controller('service')
export class ServiceController {
  constructor(@Inject('SERVICE') private readonly service: Service) {}

  @Get()
  public get() {
    return this.service.get({}).then((v) => plainToClass(Message, v));
  }
}
