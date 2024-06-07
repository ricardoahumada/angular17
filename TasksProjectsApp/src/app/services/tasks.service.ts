import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  
  constructor() { }

  private _tasks: Task[] = [
    {
      tid: 1,
      description: 'Genear app',
      time: 30,
      project: 1
    },
    {
      tid: 2,
      description: 'Modificar app',
      time: 20,
      project: 2
    },
    {
      tid: 3,
      description: 'Añadir func app',
      time: 40,
      project: 1
    }

  ];

  public getTasks(): Task[] {
    return this._tasks;
  }

  public getATask(tid: number): Task | undefined {
    return this._tasks.find((aT) => aT.tid == tid);
  }

  public deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.tid != tid);
    return true;
  }


}
