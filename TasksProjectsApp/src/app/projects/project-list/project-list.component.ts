import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {

  proyectos: Array<Project> = [];
  project_tasks: any = {};

  texto_filtro: string = '';

  constructor(private _projectServ: ProjectsService,
    private _taskSrv: TasksService
  ) { }


  ngOnInit(): void {
    this.proyectos = this._projectServ.getProjects();
    if (this.proyectos) {
      this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
    }
  }

  updateRating = (stars: number, uid: number): void => {
    console.log('updateRating:', stars, uid);

    this.proyectos.forEach(aP => {
      if (aP.pid == uid) aP.rating = stars;
    })

  }

}
