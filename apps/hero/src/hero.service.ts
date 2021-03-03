import { Injectable } from '@nestjs/common';
import { Hi } from 'proto/hero';

@Injectable()
export class HeroService {
  get(): Hi {
    return { msg: 'Hello World!' };
  }
}
