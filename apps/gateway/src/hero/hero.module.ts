import { HeroProvider } from '@app-core/providers';
import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';

@Module({
  controllers: [HeroController],
  providers: [HeroProvider],
})
export class HeroModule {}
