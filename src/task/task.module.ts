import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityTask } from './entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EntityTask])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
