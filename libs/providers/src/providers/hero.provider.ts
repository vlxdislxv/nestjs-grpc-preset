import { FactoryProvider } from '@nestjs/common';
import { join } from 'path';
import { HERO_PACKAGE_NAME, HERO_SERVICE_NAME } from 'proto/hero';
import { ProxyService } from '../proxy/proxy.service';

export const HERO_PROTO = join(
  __dirname,
  '..',
  '..',
  '..',
  'proto',
  'hero.proto',
);

export const HERO_URL = 'localhost:3001';

export const HeroProvider: FactoryProvider = {
  provide: 'HERO',
  useFactory(proxyService: ProxyService) {
    return proxyService
      .getOrMakeClient('HeroClient', {
        url: HERO_URL,
        package: HERO_PACKAGE_NAME,
        protoPath: HERO_PROTO,
      })
      .getService(HERO_SERVICE_NAME);
  },
  inject: [ProxyService],
};
