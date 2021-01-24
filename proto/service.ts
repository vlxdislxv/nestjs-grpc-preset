/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'service';

export interface Empty {}

export interface Hi {
  msg: string;
}

export const SERVICE_PACKAGE_NAME = 'service';

export interface ServiceClient {
  get(request: Empty): Observable<Hi>;
}

export interface ServiceController {
  get(request: Empty): Promise<Hi> | Observable<Hi> | Hi;
}

export function ServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods = ['get'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('Service', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('Service', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SERVICE_NAME = 'Service';
