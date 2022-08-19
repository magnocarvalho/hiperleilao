import { Module } from '@nestjs/common';
import { LeilaoService } from './leilao.service';
import { LeilaoResolver } from './leilao.resolver';

@Module({
  providers: [LeilaoResolver, LeilaoService]
})
export class LeilaoModule { }
