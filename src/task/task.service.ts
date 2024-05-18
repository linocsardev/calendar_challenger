import { Injectable, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityTask } from './entities/task.entity';
import { Repository } from 'typeorm';
import { DataTaskDto } from './dto/data-task.dto';
import { WhereTaskDto } from './dto/where-task.dto';
import { DeleteTaskDto } from './dto/Delete-task.dto';

@Injectable()
export class TaskService {

  constructor (
    @InjectRepository(EntityTask)
    private taskRepository: Repository<EntityTask>


  ){}
  async create(createTaskDto: CreateTaskDto) {
    
    if(!createTaskDto.createAt){
      let date = new Date().toISOString()
      createTaskDto.createAt = date
    }
    let newTask =  this.taskRepository.create(createTaskDto)
    let newdata =  await this.taskRepository.save(newTask);
    return {
      state: 'success',
      data: newdata,
      message: 'Tareaa creado con exito!'
    }
  }

  async findAll()  {

    let result =  this.taskRepository.createQueryBuilder('task')
    return await result.orderBy('task.id', 'DESC').getMany()

  }

  async findOne(params: DataTaskDto) {
    return await this.taskRepository.findOneBy(params);
  }

  async update(where: WhereTaskDto, params: UpdateTaskDto) {
    
    return this.taskRepository.update(where, {
      name: params.name,
      description: params.description,
      date: params.date,
      hour: params.hour,
      state: params.state
    })
  }

  async remove(id: number, idinstitucion: string) {
    return await this.taskRepository.delete({id: id, idinstitucion: idinstitucion});
  }
}
