import * as ProtoLoader from '@grpc/proto-loader';
import { Test, TestingModule } from '@nestjs/testing';
import { INestMicroservice } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import * as GRPC from 'grpc';
import { HeroModule } from '../../src/hero.module';
import { HERO_PACKAGE_NAME } from '../../../../proto/hero';
import { HERO_PROTO, HERO_URL } from '../../../../libs/providers/src/index';

describe('HeroController (e2e)', () => {
  let app: INestMicroservice;
  let client: any;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HeroModule],
    }).compile();

    app = moduleFixture.createNestMicroservice({
      transport: Transport.GRPC,
      options: {
        package: HERO_PACKAGE_NAME,
        url: HERO_URL,
        protoPath: HERO_PROTO,
      },
    });

    await app.listenAsync();

    const proto = ProtoLoader.loadSync('hero.proto', {
      includeDirs: [join(__dirname, '../../../../proto')],
    }) as any;
    // Create Raw gRPC client object
    const protoGRPC = GRPC.loadPackageDefinition(proto) as any;
    // Create client connected to started services at standard 5000 port
    client = new protoGRPC.hero.HeroService(
      HERO_URL,
      GRPC.credentials.createInsecure(),
    );
  });

  it('GRPC Sending and receiving message', async () => {
    return new Promise((resolve) => {
      client.get({}, (err, result) => {
        expect(err).toBe(null);
        expect(result).toEqual({ msg: 'Hello World!' });
        resolve(true);
      });
    });
  });

  afterAll(() => app.close());
});
