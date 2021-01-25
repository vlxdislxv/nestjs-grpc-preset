import { HeroProvider } from '@app-core/providers';
import { ProxyModule } from '@app-core/providers/proxy/proxy.module';
import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [ProxyModule.register([HeroProvider]), HeroModule],
})
export class GatewayModule {}
