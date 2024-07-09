import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './DTOs/create-task.dto';
import { StatusValidationPipe } from './pipes/status.validation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('getAll')
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createTask(@Body() objectDTO: CreateTaskDto): Task {
    return this.tasksService.createTask(objectDTO);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  @Put('/status/:id')
  changeStatus(
    @Param('id' ,StatusValidationPipe) id: string,
    @Body('status', StatusValidationPipe) status: TaskStatus,
  ) {
    return this.tasksService.changeStatus(id, status);
  }
}
