import { Controller, Get, Inject } from '@nestjs/common';
import { HeroServiceClient } from '../../../../proto/hero';

@Controller('hero')
export class HeroController {
  constructor(
    @Inject('HERO')
    private readonly heroService: HeroServiceClient,
  ) {}

  @Get()
  public get() {
    return this.heroService.get({});
  }
}
