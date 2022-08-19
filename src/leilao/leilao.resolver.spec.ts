import { Test, TestingModule } from '@nestjs/testing';
import { LeilaoResolver } from './leilao.resolver';
import { LeilaoService } from './leilao.service';

describe('LeilaoResolver', () => {
  let resolver: LeilaoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeilaoResolver, LeilaoService],
    }).compile();

    resolver = module.get<LeilaoResolver>(LeilaoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
