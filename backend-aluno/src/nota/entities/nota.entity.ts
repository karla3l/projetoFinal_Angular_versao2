import { Aluno } from 'src/aluno/entities/aluno.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_nota')
export class Nota {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  status: string;
  //@OneToOne(() => User, (user) => user.task)
  @OneToMany(() => Aluno, (aluno) => aluno.nota)
  alunos: Aluno[];
}
