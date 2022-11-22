import { Component, OnInit } from '@angular/core';
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

  constructor(
    private _projectsSrv: ProjectsService,
    private _taskSrv: TasksService
  ) {}

  ngOnInit(): void {
    this.projects = this._projectsSrv.getProjects();
    if (this.projects) {
      this.project_tasks = this._taskSrv.getAllProjectsTaskNumber();
    }
  }  

}
