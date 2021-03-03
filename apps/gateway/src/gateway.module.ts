import { HeroProvider, ProxyModule } from '@app-core/providers';
import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [ProxyModule.register([HeroProvider]), HeroModule],
})
export class GatewayModule {}
