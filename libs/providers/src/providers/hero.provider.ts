import { FactoryProvider } from '@nestjs/common';
import { join } from 'path';
import { HERO_PACKAGE_NAME, HERO_SERVICE_NAME } from 'proto/hero';
import { makeClient, promisifyService } from '../tools/gprc';

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
  useFactory() {
    const client = makeClient(HERO_URL, HERO_PACKAGE_NAME, HERO_PROTO);

    return promisifyService(client.getService(HERO_SERVICE_NAME));
  },
  inject: [],
};
