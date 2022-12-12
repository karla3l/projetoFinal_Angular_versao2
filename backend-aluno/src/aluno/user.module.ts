import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aluno]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
