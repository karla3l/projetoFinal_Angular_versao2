import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';

export class UpdateTaskDto extends PartialType(CreateNotaDto) {}
