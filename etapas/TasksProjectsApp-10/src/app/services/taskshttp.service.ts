import { Injectable, signal } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  tap
} from 'rxjs';
import { TASKS } from '../data/tasks';
import { Task } from '../models/task';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler } from '../handlers/http-error-handler';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TasksHttpService {
  constructor(private _http: HttpClient) { }

  private _tasks: Task[] = {} as Task[];

  private getRequestOptions() {
    return {
    };
  }

  getAllTasks(): Observable<Task[]> {
    return this._http
      .get<Task[]>(API_URL + '/tasks', this.getRequestOptions())
      .pipe(
        tap((data) => {
          console.log('TasksHttpService.getAllTasks received:', data);
          
          this._tasks = data;
        }),
        catchError(HttpErrorHandler.errorHandl)
      );
  }

  getATask(tid: number): Task | undefined {
    return this._tasks.find((aT) => aT.id == tid);
  }

  addATask(task: Task): Task {
    task.id = this._tasks.length;
    this._tasks = [...this._tasks, task];
    return task;
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.id != tid);
    return true;
  }

  getProjectTasks(pid: number): Task[] {
    return this._tasks.filter((aT) => aT.project == pid);
  }

  getNext(aTask: Task | undefined): number {
    const index = aTask ? this._tasks.indexOf(aTask) : -1;
    if (index >= 0) {
      if (index == this._tasks.length - 1) return this._tasks[0].id;
      else return this._tasks[index + 1].id;
    } else return -1;
  }

  getPrev(aTask: Task | undefined): number {
    const index = aTask ? this._tasks.indexOf(aTask) : -1;
    if (index <= this._tasks.length - 1) {
      if (index == 0) return this._tasks[this._tasks.length - 1].id;
      else return this._tasks[index - 1].id;
    } else return -1;
  }

}
