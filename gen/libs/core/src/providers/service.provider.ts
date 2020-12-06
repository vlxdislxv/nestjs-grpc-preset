import { FactoryProvider } from '@nestjs/common';
import { makeClient, promisifyService } from '../tools/gprc';

export const ServiceProvider: FactoryProvider = {
  provide: 'SERVICE',
  useFactory: async () => {
    const client = makeClient(
      'localhost:3001',
      'service',
      'proto/service.proto',
    );

    return promisifyService(client.getService('Service'));
  },
  inject: [],
};
