import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {

  proyectos: Array<any> = [
    { pid: 1, name: 'App 1', date: '2024-07-01', rating: 0 },
    { pid: 2, name: 'App 2', date: '2024-06-26', rating: 0 },
  ];

  texto_filtro: string = '';

  constructor() { }


  ngOnInit(): void {
  }

  updateRating = (stars: number, uid: number): void => {
    console.log('updateRating:', stars, uid);

    this.proyectos.forEach(aP => {
      if (aP.pid == uid) aP.rating = stars;
    })

  }

}
