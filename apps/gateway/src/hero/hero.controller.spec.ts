import { HeroProvider } from '@app-core/providers';
import { ProxyModule } from '@app-core/providers/proxy/proxy.module';
import { Test, TestingModule } from '@nestjs/testing';
import { HeroServiceClient } from 'proto/hero';
import { from } from 'rxjs';
import { HeroController } from './hero.controller';

describe('HeroController', () => {
  let controller: HeroController;
  let service: HeroServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProxyModule.register([HeroProvider])],
      controllers: [HeroController],
    }).compile();

    controller = module.get<HeroController>(HeroController);
    service = module.get<HeroServiceClient>('HERO');
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return msg "Hello World!"', async () => {
    const result = { msg: 'Hello World!' };
    jest.spyOn(service, 'get').mockImplementation(() => from([result]));

    expect(await controller.get().toPromise()).toEqual(result);
  });
});
