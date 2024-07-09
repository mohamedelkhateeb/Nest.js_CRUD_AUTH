import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { databaseProvider } from './config/database.config.ts';

@Module({
  imports: [TypeOrmModule.forRoot(databaseProvider) , TasksModule],
})

export class AppModule {}
