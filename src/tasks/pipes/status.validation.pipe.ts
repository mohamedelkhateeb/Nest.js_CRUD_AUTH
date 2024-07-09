import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class StatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];
  transform(value: any) {
    if (!this.isStatusValid(value))
      throw new BadRequestException(`'${value}' is not valid`);

    return value;
  }
  private isStatusValid(value: any) {
    const idx = this.allowedStatus.indexOf(value);
    return idx !== -1;
  }
}
