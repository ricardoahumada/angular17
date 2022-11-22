import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  task: Task = {} as Task;

  constructor(
    private _route: ActivatedRoute,
    private _taskSrv: TasksService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      const aT = this._taskSrv.getATask(data['tid']);
      if (aT) this.task = aT;
    });
  }

  goNext() {
    //call the service to find the next tid
    // use _router to navegate
  }

  goPrev() {
    //call the service to find the prev tid
    // use _router to navegate
  }
}
