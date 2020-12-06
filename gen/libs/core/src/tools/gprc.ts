import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SERVICE_PROTO } from '../providers';

export const makeClient = (url: string, _package: string, proto: string) => {
  return ClientProxyFactory.create({
    transport: Transport.GRPC,
    options: {
      url,
      package: _package,
      protoPath: SERVICE_PROTO,
    },
  });
};

export const promisifyService = <T>(service: T) => {
  return new Proxy(service, {
    get: (service: any, methodName: string) => {
      if (!service[methodName]) return undefined;
      return (...params) => {
        return service[methodName](...params).toPromise();
      };
    },
  });
};
