import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
  get(): any {
    return { msg: 'darova' };
  }
}
