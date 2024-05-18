import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, Query, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DataTaskDto } from './dto/data-task.dto';
import { DeleteTaskDto } from './dto/Delete-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  async create(@Body() createTaskDto: CreateTaskDto) {
    
    return await this.taskService.create(createTaskDto);
  }

  @Get('list')
  async findAll() {
  
    return {
      state: "success",
      data: await this.taskService.findAll()
    } 
  }

  @Get('data/:id')
  async findOne(@Param('id') id: string,  @Query() params: DataTaskDto) {
    if(id != params.id + ''){
      return {
        state: 'failure',
        message: 'El id no es válido'
      }
    }
  

    return {
      state: "success",
      data:  await this.taskService.findOne(params)
    }
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    if(id != updateTaskDto.id +''){
      return {
        state: 'failure',
        message: 'El id no es válido'
      }
    }
    await this.taskService.update({
      id: updateTaskDto.id,
      idinstitucion: updateTaskDto.idinstitucion
    }, updateTaskDto)
    return {
      state: "success",
      message: 'Se actualizó con éxito'
    }
    
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Body() params: DeleteTaskDto) {
    if(id != params.id +''){
      return {
        state: 'failure',
        message: 'El id no es válido'
      }
    }
    await this.taskService.remove(+id, params.idinstitucion)
    return {
      state: "success",
      message: "La tarea a sido eliminada exitosamente!"
    }
  }
}
