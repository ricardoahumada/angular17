import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TasksResolver implements Resolve<Observable<Task[]>> {
  constructor(private _tasksService: TasksService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Task[]> {
    console.log('TasksResolver:', route, state);
    
    return this._tasksService.getTasksFromApi();
  }
}
