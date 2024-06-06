import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {


  tareas: Array<any> = [
    {
      tid: 1,
      description: 'Genear app',
      time: 30,
      project: 1
    },
    {
      tid: 2,
      description: 'Modificar app',
      time: 20,
      project: 2
    },
    {
      tid: 3,
      description: 'Añadir func app',
      time: 40,
      project: 1
    }
  ];

  texto_filtro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarT = (tid: number): void => {
    console.log('borrando:', tid);

    this.tareas = this.tareas.filter(aT => aT.tid != tid);
  }

  filtraT = (texto: string): Array<any> => {
    return this.tareas.filter(aT => aT.description.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));
  }

}
