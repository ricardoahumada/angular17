import { Component, OnInit } from '@angular/core';
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

  //TDOD: generate template driven form
  
  onSubmitTask() {
    //TDOD: save new task
  }

}
