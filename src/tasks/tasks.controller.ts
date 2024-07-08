import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('getAll')
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post('create')
  createTask(@Body() body): Task {
    return this.tasksService.createTask(body.title, body.description);
  }
}
