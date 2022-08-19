import { CreateLeilaoInput } from './create-leilao.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLeilaoInput extends PartialType(CreateLeilaoInput) {
  id: number;
}
