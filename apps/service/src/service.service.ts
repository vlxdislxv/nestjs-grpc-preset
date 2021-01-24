import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {
  get(): any {
    return { msg: 'darova' };
  }
}
