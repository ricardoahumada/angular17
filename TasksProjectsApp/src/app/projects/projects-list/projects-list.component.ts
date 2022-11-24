import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = [];
  filter_text: string = '';
  project_tasks: any = {};
  apiError:boolean=false;
  loading:boolean=true;

  $projectSubs: Subscription = {} as Subscription;

  constructor(
    private _projectsSrv: ProjectsService,
    private _taskSrv: TasksService
  ) {}

  ngOnInit(): void {
    /* this.projects = this._projectsSrv.getProjects();
    if (this.projects) {
      this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
    } */
    this.$projectSubs=this._projectsSrv.getProjectsFromApi().subscribe({
      next: data=>{
        this.projects = data;
        this.loading=false;
        if (this.projects) {
          this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
        }
      },
      error:(err)=>{this.apiError=true;}
    })

  }

  ngOnDestroy():void{
    this.$projectSubs.unsubscribe();
  }
}
