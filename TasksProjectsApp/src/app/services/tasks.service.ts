import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Task } from 'src/app/models/task';
import { HttpErrorHandler } from '../handlers/http-error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root',
})
export class TasksService {


  constructor(private _http: HttpClient, private session: SessionService) { }

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

  private $tasksObsr: Observable<Task[]> | null = null;

  getTasksFromApiStore() {
    /* if (this._tasks.length > 0) {
      return of(this._tasks);
    } else if (this.$tasksObsr) {
      return this.$tasksObsr;
    } else { */
    console.log('getTasksFromApiStore...');
    const httpOptions = this.getRequestOptions();
    this.$tasksObsr = this._http
      .get<Task[]>('http://localhost:3000/tasks', httpOptions)
      .pipe(
        tap((data) => {
          console.log('getTasksFromApiStore:', data);
          this._tasks = data;
        }),
        catchError(HttpErrorHandler.errorHandl)
      );
    return this.$tasksObsr;
    // }
  }

  getTasksFromApi() {
    const httpOptions = {};
    // const httpOptions = this.getRequestOptions();

    this.$tasksObsr = this._http
      .get<Task[]>('http://localhost:3000/tasks', httpOptions)
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
