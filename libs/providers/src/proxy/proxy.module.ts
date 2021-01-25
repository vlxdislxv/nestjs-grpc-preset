import { DynamicModule, FactoryProvider, Global, Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Global()
@Module({})
export class ProxyModule {
  public static register(providers: FactoryProvider[]): DynamicModule {
    return {
      module: ProxyModule,
      providers: [ProxyService, ...providers],
      exports: [...providers],
    };
  }
}
