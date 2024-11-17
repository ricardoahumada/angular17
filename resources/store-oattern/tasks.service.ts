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

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private _http: HttpClient) { }

  private _tasks: Task[] = [];
  private $tasksSub = new BehaviorSubject<Task[]>(this._tasks);

  getTasks() {
    if (this._tasks.length > 0) {
      return of(this._tasks);
    } else if (this.$tasksSub) {
      return this.$tasksSub;
    } else {
      console.log('getTasks...');
      const httpOptions = this.getRequestOptions();
      this._http
        .get<Task[]>(API_URL + '/tasks', httpOptions)
        .pipe(
          tap((data) => {
            console.log('getTasks:', data);
            this._tasks = data;
            this.$tasksSub.next(this._tasks);
          }),
          catchError(HttpErrorHandler.errorHandl)
        );
      return this.$tasksSub;
    }
  }

  deleteATask(tid: number): boolean {
    this._tasks = this._tasks.filter((aT) => aT.id != tid);
    this.$tasksSub.next(this._tasks);
    return true;
  }

  private getRequestOptions() {
    return {
      headers: new HttpHeaders({
        //header here
      }),
    };
  }
}
