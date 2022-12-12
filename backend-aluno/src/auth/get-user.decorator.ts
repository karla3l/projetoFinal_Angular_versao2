/* eslint-disable prettier/prettier */
import { createParamDecorator } from '@nestjs/common';
import { Aluno } from 'src/aluno/entities/aluno.entity';
export const GetAluno = createParamDecorator(
  (data, req): Aluno => {
    const aluno = req.args[0].aluno;
    return aluno;
  },
);
