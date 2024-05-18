import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { AllTaskDto } from './all.dto';

export class UpdateTaskDto extends OmitType(AllTaskDto, ['createAt', 'createBy' ]) {}
