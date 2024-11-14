import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import { ProjectsService } from '../../services/projects.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project = {} as Project;
  tasks: Task[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _projectSrv: ProjectsService,
    private _taskSrv: TasksService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      const pid = data['pid'];
      this._projectSrv.setCurrentProject(pid);
      const aP = this._projectSrv.getAproject(pid);
      if (aP) this.project = aP;
      this.tasks = this._taskSrv.getProjectTasks(pid);
    });
  }

  goBack(){
    this._router.navigate(['/projects'])
  }

  navigateToTasks(){
    this._router.navigate(['projects',this.project.id,'tasks'],  {state: this.project})
  }

  navigateToMembers(){
    this._router.navigate(['projects',this.project.id,'members'],  {state: this.project})
  }

  ngOnDestroy(){
    this._projectSrv.setCurrentProject(0);
  }
}
