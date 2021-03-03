import { Test, TestingModule } from '@nestjs/testing';
import { HeroService } from './hero.service';

describe('HiService', () => {
  let service: HeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroService],
    }).compile();

    service = module.get<HeroService>(HeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return msg Hello World!', () => {
    expect(service.get()).toEqual({ msg: 'Hello World!' });
  });
});
