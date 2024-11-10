import { Injectable, signal } from '@angular/core';
import {
  BehaviorSubject
} from 'rxjs';
import { TASKS } from '../data/tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() { }

  tasks = signal(TASKS);

  getATask(tid: number): Task | undefined {
    return this.tasks().find((aT) => aT.id == tid);
  }

  deleteATask(tid: number): boolean {
    this.tasks.set(this.tasks().filter((aT) => aT.id != tid));
    return true;
  }

  getProjectTasks(pid: number): Task[] {
    return this.tasks().filter((aT) => aT.project == pid);
  }

}
