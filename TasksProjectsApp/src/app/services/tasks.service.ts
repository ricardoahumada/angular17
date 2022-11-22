import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  _tasks: Task[] = [{ tid: 1, description: 'Create html', time: 23, project: 1 },
  { tid: 2, description: 'Create js', time: 23, project: 2 },
  { tid: 3, description: 'Create TS', time: 23, project: 1 },
  { tid: 4, description: 'Deploy to production', time: 23, project: 2 },
  { tid: 5, description: 'Create html', time: 23, project: 1 },];

  getTasks():Task[] {
    return this._tasks;
  }

  getATask(tid: number): Task | undefined {
    return this._tasks.find((aT) => aT.tid == tid);
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.tid != tid);
    return true;
  }
}
