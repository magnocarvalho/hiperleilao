import { Injectable } from '@nestjs/common';
import { CreateLeilaoInput } from './dto/create-leilao.input';
import { UpdateLeilaoInput } from './dto/update-leilao.input';

@Injectable()
export class LeilaoService {
  create(createLeilaoInput: CreateLeilaoInput) {
    return 'This action adds a new leilao';
  }

  findAll() {
    return `This action returns all leilao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leilao`;
  }

  update(id: number, updateLeilaoInput: UpdateLeilaoInput) {
    return `This action updates a #${id} leilao`;
  }

  remove(id: number) {
    return `This action removes a #${id} leilao`;
  }
}
