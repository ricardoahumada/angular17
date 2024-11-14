import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private _taskServ: TasksService, private _router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild('nTaskForm')
  ntform: any;
  newTask: Task = {} as Task;

  onSubmitTask() {
    this._taskServ.addATask(this.newTask);
    this._router.navigate(['/tasks'])
  }

}
