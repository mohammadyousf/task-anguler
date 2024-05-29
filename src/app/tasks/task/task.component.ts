import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  @Output() complet = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompletTaske() {
    this.tasksService.removeTask(this.task.id)
  }
}
