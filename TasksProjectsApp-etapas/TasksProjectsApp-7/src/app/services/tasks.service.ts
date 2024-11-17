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

  addATask(task: Task): Task {
    task.id = this.tasks().length;
    this.tasks.set([...this.tasks(), task]);
    return task;
  }

  deleteATask(tid: number): boolean {
    this.tasks.set(this.tasks().filter((aT) => aT.id != tid));
    return true;
  }

  getProjectTasks(pid: number): Task[] {
    return this.tasks().filter((aT) => aT.project == pid);
  }

  getNext(aTask: Task | undefined): number {
    const index = aTask ? this.tasks().indexOf(aTask) : -1;
    if (index >= 0) {
      if (index == this.tasks().length - 1) return this.tasks()[0].id;
      else return this.tasks()[index + 1].id;
    } else return -1;
  }

  getPrev(aTask: Task | undefined): number {
    const index = aTask ? this.tasks().indexOf(aTask) : -1;
    if (index <= this.tasks().length - 1) {
      if (index == 0) return this.tasks()[this.tasks().length - 1].id;
      else return this.tasks()[index - 1].id;
    } else return -1;
  }

}
