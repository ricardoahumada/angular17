import { Component, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailForPreviewComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _taskSrv: TasksService,
    private _router: Router
  ) { }

  task: Task = {} as Task;

  ngOnInit(): void {
    
  }
}
