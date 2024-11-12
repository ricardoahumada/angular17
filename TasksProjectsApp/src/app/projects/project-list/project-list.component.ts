import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {

  constructor(private _projectService: ProjectsService) {
  }

  filter_text: string = '';

  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = this._projectService.getProjects();
  }
  
}
