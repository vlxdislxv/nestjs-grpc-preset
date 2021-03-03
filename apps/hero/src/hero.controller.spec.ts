import { Test, TestingModule } from '@nestjs/testing';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

describe('ServiceController', () => {
  let serviceController: HeroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [HeroService],
    }).compile();

    serviceController = app.get<HeroController>(HeroController);
  });

  describe('root', () => {
    it('should return msg "Hello World!"', () => {
      expect(serviceController.get()).toEqual({ msg: 'Hello World!' });
    });
  });
});
