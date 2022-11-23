import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private _tasks: Task[] = [
    { tid: 1, description: 'Create html', time: 23, project: 1 },
    { tid: 2, description: 'Create js', time: 23, project: 2 },
    { tid: 3, description: 'Create TS', time: 23, project: 1 },
    { tid: 4, description: 'Deploy to production', time: 23, project: 2 },
    { tid: 5, description: 'Create html', time: 23, project: 1 },
  ];

  private $tasksObs = new BehaviorSubject<Task[]>(this._tasks );

  getTasks(): Task[] {
    return this._tasks;
  }

  getTasksObs():Observable<Task[]>{
    return this.$tasksObs;
  }

  getATask(tid: number): Task | undefined {
    return this._tasks.find((aT) => aT.tid == tid);
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.tid != tid);
    this.$tasksObs.next(this._tasks);
    return true;
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
