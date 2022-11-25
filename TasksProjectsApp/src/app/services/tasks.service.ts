import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { Task } from 'src/app/models/task';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler } from '../handlers/http-error-handler';
import { SessionService } from './session.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient, private session: SessionService) {}

  private _tasks: Task[] = [
    /*     { id: 1, description: 'Create html', time: 23, project: 1 },
    { id: 2, description: 'Create js', time: 23, project: 2 },
    { id: 3, description: 'Create TS', time: 23, project: 1 },
    { id: 4, description: 'Deploy to production', time: 23, project: 2 },
    { id: 5, description: 'Create html', time: 23, project: 1 },
 */
  ];

  private $tasksObs = new BehaviorSubject<Task[]>(this._tasks);

  getTasks(): Task[] {
    return this._tasks;
  }

  getTasksObs(): Observable<Task[]> {
    return this.$tasksObs;
  }

  getATask(tid: number): Task | undefined {
    return this._tasks.find((aT) => aT.id == tid);
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.id != tid);
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
      if (index == this._tasks.length - 1) return this._tasks[0].id;
      else return this._tasks[index + 1].id;
    } else return -1;
  }

  getPrev(aTask: Task): number {
    const index = this._tasks.indexOf(aTask);
    if (index <= this._tasks.length - 1) {
      if (index == 0) return this._tasks[this._tasks.length - 1].id;
      else return this._tasks[index - 1].id;
    } else return -1;
  }

  private $tasksObsr: Observable<Task[]> | null = null;

  getTasksFromApiStore() {
    if (this._tasks.length > 0) {
      return of(this._tasks);
    } else if (this.$tasksObsr) {
      return this.$tasksObsr;
    } else {
      console.log('getTasksFromApiStore...');
      const httpOptions = this.getRequestOptions();
      this.$tasksObsr = this._http
        .get<Task[]>(API_URL + '/tasks', httpOptions)
        .pipe(
          tap((data) => {
            console.log('getTasksFromApiStore:', data);

            this._tasks = data;
          }),
          catchError(HttpErrorHandler.errorHandl)
        );
      return this.$tasksObsr;
    }
  }

  getTasksFromApi() {
    const httpOptions = {};
    // const httpOptions = this.getRequestOptions();

    this.$tasksObsr = this._http
      .get<Task[]>(API_URL + '/tasks', httpOptions)
      .pipe(
        tap((data) => {
          this._tasks = data;
        }),
        catchError(HttpErrorHandler.errorHandl)
      );
    return this.$tasksObsr;
  }

  private getRequestOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.session.accessToken,
      }),
    };
  }
}
