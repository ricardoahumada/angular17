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
export class TaskDetailComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _taskSrv: TasksService,
    private _router: Router
  ) {}

  tid = toSignal(this._route.params.pipe(map(params => params['tid'])));
  task = computed(() => this._taskSrv.getATask(this.tid()));

  ngOnInit(): void {
  }

  
  goNext() {
    const newTid=this._taskSrv.getNext(this.task());
    if(newTid>=0) this._router.navigate(['/tasks',newTid]);
    else this._router.navigate(['/tasks']);
  }

  goPrev() {
    const newTid=this._taskSrv.getPrev(this.task());
    if(newTid>=0) this._router.navigate(['/tasks',newTid]);
    else this._router.navigate(['/tasks']);
  }
}
