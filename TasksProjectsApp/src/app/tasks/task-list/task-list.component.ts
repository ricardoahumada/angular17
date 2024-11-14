import { Component, computed, OnInit, signal } from '@angular/core';
import { Task } from '../../models/task';
import { TASKS } from '../../data/tasks';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  constructor(public taksService: TasksService) {
  }

  filter_text = signal('');

  filteredTasks = computed(() => this.taksService.tasks().filter(aT => aT.description.toLocaleLowerCase().includes(this.filter_text().toLocaleLowerCase())))


  deleteTask(tid: number): void {
    this.taksService.deleteATask(tid);
  }

}
