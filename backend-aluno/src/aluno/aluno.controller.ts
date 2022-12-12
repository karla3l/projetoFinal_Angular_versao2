import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateAlunorDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createalunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get('/list/:id')
  findOne(@Param('id') id: string) {
    return this.alunoService.findOne(id);
  }

  @Get(':email')
  @UseGuards(AuthGuard())
  findByEmail(@Param('email') email: string) {
    return this.alunoService.findByEmail(email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateAlunoDto: UpdateAlunoDto,
  ) {
    return this.alunoService.update(id, updateAlunoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.alunoService.remove(id);
    return {
      message: 'Aluno removido com sucesso!',
    };
  }
}
