import { Expose } from 'class-transformer';

export class Message {
  msg: string;

  @Expose({ name: 'privet' })
  get hi() {
    return 'hi';
  }
}
