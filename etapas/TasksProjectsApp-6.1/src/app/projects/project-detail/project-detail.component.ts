import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project = {} as Project;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _projectSrv: ProjectsService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      const pid = data['pid'];
      this._projectSrv.setCurrentProject(pid);
      const aP = this._projectSrv.getAproject(pid);
      if (aP) this.project = aP;
    });
  }

  goBack(){
    this._router.navigate(['/projects'])
  }
  
}
