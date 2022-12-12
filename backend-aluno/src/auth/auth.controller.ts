import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateAlunoDto } from 'src/aluno/dto/create-aluno.dto';
import { CredentialsDto } from 'src/aluno/dto/credentials.dto';
import { Aluno } from 'src/aluno/entities/aluno.entity';
import { AuthService } from './auth.service';
import { GetAluno } from './get-aluno.decorator';

//npm i --save passport passport-jwt @nestjs/jwt @nestjs/passport

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) createAlunoDto: CreateAlunoDto,
  ): Promise<{ message: string }> {
    await this.authService.signUp(createAlunoDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credentiaslsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(credentiaslsDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  getMe(@GetAluno() aluno: Aluno): Aluno {
    return aluno;
  }
}
