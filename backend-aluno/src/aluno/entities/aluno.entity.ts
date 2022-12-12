
import * as bcrypt from 'bcrypt';
import { Aluno } from 'src/aluno/entities/Aluno.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('tbl_aluno')
export class Aluno {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  status: boolean;
  @Column()
  confirmationToken: string;
  @Column({ nullable: false })
  salt: string;
  @CreateDateColumn()
  createAt: Date;
  @UpdateDateColumn()
  updateAt: Date;

  // @OneToOne(() => Task, (task) => task.user)
  // @JoinColumn()
  // task: Task;
  @ManyToOne(() => Nota) //muitos alunos possuem notas
  nota: Nota;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
