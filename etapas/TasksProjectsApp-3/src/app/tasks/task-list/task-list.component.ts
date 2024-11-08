import { Component, signal,computed } from '@angular/core';
import { Task } from '../../models/task';
import { TASKS } from '../../data/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = TASKS;
  taskList = signal(this.tasks)
  filter_text: string = '';
  filterSIgnal = signal('')
  filteredTaskList = computed(() => this.tasks.filter(aT => aT.description.toLocaleLowerCase().includes(this.filterSIgnal().toLocaleLowerCase())));

  filterChange($event:any) {
    if ($event.target) {
      const value = $event.target.value;
      this.taskList.set(this.tasks.filter(aT => aT.description.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
    }
  }

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
