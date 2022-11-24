import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Task } from 'src/app/models/task';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.scss'],
})
export class ProjectTasksComponent implements OnInit {
  project: Project = {} as Project;
  tasks: Task[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _projectSrv: ProjectsService,
    private _taskSrv: TasksService
  ) {}

  ngOnInit(): void {
    const aProject = this._projectSrv.getCurrentProject();
    if (aProject) {
      this.project = aProject;
      const pid = this.project.id;
      if (pid) this.tasks = this._taskSrv.getProjectTasks(pid);
    }
  }
}
