import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  constructor(private _taskSrv: TasksService) {}

  filter_text: string = '';

  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = this._taskSrv.getTasks();
  }

  deleteTask(tid: number) {
    // this.tasks = this.tasks.filter((aT) => aT.tid != tid);
    this._taskSrv.deleteATask(tid);
  }

  show_desc_form: any = {};

  showDescForm(tid: number) {
    this.show_desc_form[tid] = true;
  }

  saveName(text: string, tid: number) {
    console.log('saveName:', text, tid);
    const aTask = this.tasks.find((aT) => aT.tid == tid);
    if (aTask) aTask.description = text;
    this.show_desc_form[tid] = false;
  }
}
