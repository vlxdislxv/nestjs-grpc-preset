import { FactoryProvider } from '@nestjs/common';
import { join } from 'path';
import { makeClient, promisifyService } from '../tools/gprc';

export const ServiceProvider: FactoryProvider = {
  provide: 'SERVICE',
  useFactory: async () => {
    const client = makeClient(SERVICE_URL, SERVICE_PACKAGE, SERVICE_PROTO);

    return promisifyService(client.getService('Service'));
  },
  inject: [],
};

export const SERVICE_PROTO = join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  'proto',
  'service.proto',
);

export const SERVICE_URL = 'localhost:3001';

export const SERVICE_PACKAGE = 'service';
