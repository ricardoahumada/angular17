import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';
import { TasksHttpService } from '../services/taskshttp.service';

@Injectable({
  providedIn: 'root'
})
export class TasksResolver implements Resolve<Observable<Task[]>> {
  constructor(private _tasksService: TasksHttpService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Task[]> {
    console.log('TasksResolver: preloading....');
    
    return this._tasksService.getAllTasks();
  }
}
