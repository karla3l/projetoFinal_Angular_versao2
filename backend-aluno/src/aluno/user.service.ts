import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunosRepository: Repository<Aluno>,
  ) {}
  //-----------------------------------------------------------------------------------------------
  async create(createAlunoDto: CreateAlunoDto) {
    createAlunoDto.confirmationToken = crypto.randomBytes(32).toString('hex');
    createAlunoDto.salt = await bcrypt.genSalt();
    //console.log(salt);
    createAlunoDto.password = await this.hashPassword(
      createAlunoDto.password,
      createAlunoDto.salt,
    );
    

    try {
      await this.alunosRepository.save(createAlunoDto);
      delete createAlunoDto.password;
      delete createAlunoDto.salt;
      return createAlunoDto;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o aluno no banco de dados',
        );
      }
    }
  }
  //----------------------------------------------------------------------------
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
  //----------------------------------------------------------------------------
  async findAll(): Promise<Aluno[]> {
    try {
      return await this.alunosRepository.find();
    } catch (err) {
      console.log('Impossível buscar aluno');
      return null;
    }
  }
  //----------------------------------------------------------------------------
  async findOne(id: string): Promise<Aluno> {
    const aluno = this.alunosRepository
      .createQueryBuilder('aluno')
      .select(['aluno.nome', 'aluno.email'])
      .getOne();
    if (!aluno) throw new NotFoundException('Aluno não encontrado');

    return aluno;
  }
  //----------------------------------------------------------------------------
  async findByEmail(email: string): Promise<Aluno> {
    return await this.alunosRepository.findOneBy({ email });
  }
  //----------------------------------------------------------------------------
  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await this.findOne(id);
    const { nome, email, status } = updateAlunoDto;
    aluno.nome = nome ? nome : aluno.nome;
    aluno.email = email ? email : aluno.email;
    aluno.status = status === undefined ? aluno.status : status;
    try {
      await this.alunosRepository.save(aluno);
      return aluno;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }
  //----------------------------------------------------------------------------
  async remove(alunoId: string) {
    const result = await this.alunosRepository.delete({ id: alunoId });
    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um aluno com o ID informado',
      );
    }
  }
  //----------------------------------------------------------------------------
  async checkCredentials(credentialsDto: CredentialsDto): Promise<Aluno> {
    const { email, password } = credentialsDto;
    let aluno = new Aluno();
    aluno = await this.findByEmail(email);

    if (aluno && (await aluno.checkPassword(password))) {
      return aluno;
    } else {
      return null;
    }
  }
  //----------------------------------------------------------------------------
}
