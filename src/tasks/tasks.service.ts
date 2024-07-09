import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './DTOs/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getById(id: string): Task {
    const task = this.tasks.find((task) => task.id == id);
    if(!task) {
      throw new NotFoundException("Task Not Found")
    }
    return task;
  }

  createTask(objectDTO: CreateTaskDto): Task {
    const { title, description } = objectDTO;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.DONE,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  changeStatus(id: string, status: TaskStatus): Task {
    const task = this.getById(id);
    task.status = status;
    return task;
  }
}
