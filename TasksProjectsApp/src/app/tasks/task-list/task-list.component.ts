import { Component, computed, signal } from '@angular/core';
import { Task } from '../../models/task';
import { TASKS } from '../../data/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = TASKS;
  taskList = signal(this.tasks);
  filter_text = signal('');

  filteredTasks = computed(()=>this.taskList().filter(aT => aT.description.toLocaleLowerCase().includes(this.filter_text().toLocaleLowerCase())))

  deleteTask(tid: number): void {
    if (this.tasks) {
      // this.tasks = this.taskList().filter(aT => aT.id != tid);
      this.taskList.set(this.taskList().filter(aT => aT.id != tid));
    }
  }

}
