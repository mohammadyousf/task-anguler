import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { NewTaskData } from '../new-task.model';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',

  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitel = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitel,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();

  }
}