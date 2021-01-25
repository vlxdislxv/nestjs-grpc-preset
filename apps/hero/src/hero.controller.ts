import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hi, HeroServiceController } from 'proto/hero';
import { HeroService } from './hero.service';

@Controller()
export class HeroController implements HeroServiceController {
  constructor(private readonly serviceService: HeroService) {}

  @GrpcMethod('HeroService', 'Get')
  get(): Hi {
    return this.serviceService.get();
  }
}
