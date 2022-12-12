import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { Nota } from './entities/nota.entity';

@Injectable()
export class NotaService {
  constructor(
    @InjectRepository(Nota)
    private alunosRepository: Repository<Nota>,
  ) {}

  async create(createNotaDto: CreateNotaDto) {
    return this.alunosRepository.insert(createNotaDto);
  }

  async findAll(): Promise<Nota[]> {
    return await this.alunosRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} nota`;
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    return `This action updates a #${id} nota`;
  }

  remove(id: number) {
    return `This action removes a #${id} nota`;
  }
}
