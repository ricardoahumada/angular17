import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  apiError: boolean = false;
  loading: boolean = true;

  $projectSubs: Subscription = {} as Subscription;


  constructor(private _projectServ: ProjectsService,
    private _taskSrv: TasksService
  ) { }


  ngOnInit(): void {
    this.proyectos = this._projectServ.getProjects();
    if (this.proyectos) {
      this.loading = false;
      this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
    }

    /* this.$projectSubs = this._projectServ.getProjectsFromApi().subscribe({
      next: data => {
        this.proyectos = data;
        this.loading=false;
        if (this.proyectos) {
          this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
        }
      },
      error: (err) => { this.apiError = true; }
    }) */
  }

  updateRating = (stars: number, uid: number): void => {
    console.log('updateRating:', stars, uid);

    this.proyectos.forEach(aP => {
      if (aP.pid == uid) aP.rating = stars;
    })

  }

  ngOnDestroy(): void {
    // this.$projectSubs.unsubscribe();
  }

}
