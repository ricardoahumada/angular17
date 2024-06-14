import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {


  tareas: Array<Task> = [
  ];

  texto_filtro: string = '';

  $taskSubs: Subscription = {} as Subscription;


  constructor(private _taskSrv: TasksService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.tareas = this._taskSrv.getTasks();

    //Api
    /* this.$taskSubs = this._taskSrv.getTasksFromApi().subscribe((data) => {
      this.tareas = data;
    }); */

    // resolver
    this._route.data.subscribe((datos:any) => {
      console.log('datos en ruta:', datos);
      
      this.tareas = datos.tasks;
    })
  }

  borrarT = (tid: number): void => {
    console.log('borrando:', tid);

    // this.tareas = this.tareas.filter(aT => aT.tid != tid);
    this._taskSrv.deleteATask(tid);
  }

  filtraT = (texto: string): Array<any> => {
    return this.tareas.filter(aT => aT.description.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));
  }

}
