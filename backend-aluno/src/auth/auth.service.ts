import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAlunoDto } from 'src/aluno/dto/create-aluno.dto';
import { CredentialsDto } from 'src/aluno/dto/credentials.dto';
import { AlunoService } from 'src/aluno/aluno.service';
import { Repository } from 'typeorm';
import { Aluno } from './../aluno/entities/aluno.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Aluno)
    private userRepository: Repository<Aluno>,
    private readonly alunoService: AlunoService,
    private jwtService: JwtService,
  ) {}

  async signUp(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    if (createAlunoDto.password != createAlunoDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return this.alunoRepository.create(createAlunoDto);
    }
  }

  async signIn(credentialsDto: CredentialsDto) {
    const aluno = await this.alunoService.checkCredentials(credentialsDto);

    if (aluno === null) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const jwtPayload = {
      id: aluno.id,
    };
    const token = this.jwtService.sign(jwtPayload);

    return { token };
  }
}
