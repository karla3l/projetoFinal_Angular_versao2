export class CreateAlunoDto {
  id: string;

  nome: string;

  email: string;

  status: boolean;

  password: string;

  passwordConfirmation: string;

  confirmationToken: string;

  salt: string;

  createAt: Date;

  updateAt: Date;

  //precisa passar um objeto
  //taskId:Task;
}
