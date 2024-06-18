import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class EmiterService {

  constructor() { }

  private _tasks: Task[] = [
    { tid: 1, description: 'Create html', time: 23, project: 1 },
    { tid: 2, description: 'Create js', time: 23, project: 2 },
    { tid: 3, description: 'Create TS', time: 23, project: 1 },
    { tid: 4, description: 'Deploy to production', time: 23, project: 2 },
    { tid: 5, description: 'Create html', time: 23, project: 1 },
  ];

  private $tasksSub = new BehaviorSubject<Task[]>(this._tasks);

  getTasksObs(): Observable<Task[]> {
    return this.$tasksSub;
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.tid != tid);
    this.$tasksSub.next(this._tasks);
    return true;
  }

}
