/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'hero';

export interface Empty {}

export interface Hi {
  msg: string;
}

export const HERO_PACKAGE_NAME = 'hero';

export interface HeroServiceClient {
  get(request: Empty): Observable<Hi>;
}

export interface HeroServiceController {
  get(request: Empty): Promise<Hi> | Observable<Hi> | Hi;
}

export function HeroServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods = ['get'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('HeroService', method)(
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
      GrpcStreamMethod('HeroService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const HERO_SERVICE_NAME = 'HeroService';
