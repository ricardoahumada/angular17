import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  filter_text: string = '';

  projects: Project[] = PROJECTS;
}
