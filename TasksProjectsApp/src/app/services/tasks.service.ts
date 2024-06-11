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
    console.log('deleteATask:', this._tasks);
    
    return true;
  }

  public duplicateATask(tid: number): boolean {
    const tad = this.getATask(tid);
    if (tad) {
      tad.tid = this._tasks.length;
      this._tasks.push({ ...tad });
      return true;
    } else return false;
  }

  getProjectTasks(pid: number): Task[] {
    return this._tasks.filter((aT) => aT.project == pid);
  }

  getAllProjectsTaskNumber(): any {
    return this._tasks.reduce((acc: any, aT: Task) => {
      if (acc[aT.project]) {
        acc[aT.project] = acc[aT.project] + 1;
      } else acc[aT.project] = 1;

      return acc;
    }, {});
  }

  getNext(aTask: Task): number {
    const index = this._tasks.indexOf(aTask);
    if (index >= 0) {
      if (index == this._tasks.length - 1) return this._tasks[0].tid;
      else return this._tasks[index + 1].tid;
    } else return -1;
  }

  getPrev(aTask: Task): number {
    const index = this._tasks.indexOf(aTask);
    if (index <= this._tasks.length - 1) {
      if (index == 0) return this._tasks[this._tasks.length - 1].tid;
      else return this._tasks[index - 1].tid;
    } else return -1;
  }

}
