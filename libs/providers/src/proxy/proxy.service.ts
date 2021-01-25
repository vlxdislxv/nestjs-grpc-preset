import { Injectable } from '@nestjs/common';
import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ProtoOptions } from './interfaces/options';

@Injectable()
export class ProxyService {
  private _clients: Map<string, ClientGrpcProxy>;

  constructor() {
    this._clients = new Map();
  }

  public getOrMakeClient(
    name: string,
    options?: ProtoOptions,
  ): ClientGrpcProxy {
    if (!this._clients.has(name)) {
      if (!options) {
        throw new Error('can not make client without options');
      }

      return this.make(name, options);
    }

    return this._clients.get(name);
  }

  private make(name: string, options: ProtoOptions): ClientGrpcProxy {
    const client = ClientProxyFactory.create({
      transport: Transport.GRPC,
      options,
    });

    this._clients.set(name, client);

    return client;
  }
}
