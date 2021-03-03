import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { ClassSerializerInterceptor } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  ProxyModule,
  HeroProvider,
} from '../../../../libs/providers/src/index';
import { HeroModule } from '../../src/hero/hero.module';

describe('GatewayController (e2e)', () => {
  const heroService = {
    get: () => ({
      msg: 'Hello World!',
    }),
  };

  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HeroModule, ProxyModule.register([HeroProvider])],
    })
      .overrideProvider('HERO')
      .useValue(heroService)
      .compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    app.useGlobalInterceptors(
      new ClassSerializerInterceptor(app.get(Reflector)),
    );

    await app.init();
  });

  it('/ (GET) MSG "Hello World!"', () => {
    return app
      .inject({
        method: 'GET',
        url: '/hero',
      })
      .then(({ payload }) =>
        expect(JSON.parse(payload)).toEqual(heroService.get()),
      );
  });

  afterEach(async () => {
    await app.close();
  });
});
