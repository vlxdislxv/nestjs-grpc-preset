import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceService {
  getHello(): any {
    return { msg: 'darova' };
  }
}
