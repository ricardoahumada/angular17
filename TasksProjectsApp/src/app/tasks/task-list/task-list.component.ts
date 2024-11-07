import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TASKS } from '../../data/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = TASKS;
  filter_text: string = '';

  getFilteredTasks(): Task[] | null {
    if (this.tasks && this.filter_text) return this.tasks.filter(aT => aT.description.toLocaleLowerCase().includes(this.filter_text.toLocaleLowerCase()))
    else return this.tasks
  }

  deleteTask(tid: number): void {
    if (this.tasks) {
      this.tasks = this.tasks.filter(aT => aT.id != tid)
    }
  }

}
