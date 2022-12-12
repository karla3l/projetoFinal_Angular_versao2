import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CreateAlunoDto } from './create-aluno.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
  @IsOptional()
  @IsString({
    message: 'Informe um nome de aluno matriculado',
  })
  nome: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Informe um endereço de email',
    },
  )
  email: string;

  @IsOptional()
  status: boolean;
}
