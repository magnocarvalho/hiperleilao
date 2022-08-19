import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { LeilaoModule } from './leilao/leilao.module';


@Module({
  imports: [ClienteModule, LeilaoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
