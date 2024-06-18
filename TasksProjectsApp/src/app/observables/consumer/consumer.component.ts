import { Component, OnInit } from '@angular/core';
import { EmiterService } from '../services/emiter.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  constructor(private _emiterSrvc: EmiterService) { }

  tasks: Task[] = [];

  ngOnInit(): void {
    this._emiterSrvc.getTasksObs().subscribe((data) => {
      this.tasks = data;
    });

  }

  deleteTask(tid: number) {
    this._emiterSrvc.deleteATask(tid);
  }

}
