import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Hi, HeroServiceClient } from '../../../../proto/hero';

@Controller('hero')
export class HeroController {
  constructor(
    @Inject('HERO')
    private readonly heroService: HeroServiceClient,
  ) {}

  @Get()
  public get(): Hi | Observable<Hi> {
    return this.heroService.get({});
  }
}
