import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Nota } from './nota/entities/nota.entity';
import { NotaModule } from './nota/nota.module';
import { Aluno } from './aluno/entities/aluno.entity';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'todolist',
      entities: [Aluno, Nota],
      synchronize: true,
      logging: true,
    }),
    AlunoModule,
    NotaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
