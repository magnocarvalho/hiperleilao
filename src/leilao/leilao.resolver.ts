import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LeilaoService } from './leilao.service';
import { CreateLeilaoInput } from './dto/create-leilao.input';
import { UpdateLeilaoInput } from './dto/update-leilao.input';

@Resolver('Leilao')
export class LeilaoResolver {
  constructor(private readonly leilaoService: LeilaoService) {}

  @Mutation('createLeilao')
  create(@Args('createLeilaoInput') createLeilaoInput: CreateLeilaoInput) {
    return this.leilaoService.create(createLeilaoInput);
  }

  @Query('leilao')
  findAll() {
    return this.leilaoService.findAll();
  }

  @Query('leilao')
  findOne(@Args('id') id: number) {
    return this.leilaoService.findOne(id);
  }

  @Mutation('updateLeilao')
  update(@Args('updateLeilaoInput') updateLeilaoInput: UpdateLeilaoInput) {
    return this.leilaoService.update(updateLeilaoInput.id, updateLeilaoInput);
  }

  @Mutation('removeLeilao')
  remove(@Args('id') id: number) {
    return this.leilaoService.remove(id);
  }
}
