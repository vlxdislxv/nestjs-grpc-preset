import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const makeClient = (url: string, _package: string, proto: string) => {
  return ClientProxyFactory.create({
    transport: Transport.GRPC,
    options: {
      url,
      package: _package,
      protoPath: proto,
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
