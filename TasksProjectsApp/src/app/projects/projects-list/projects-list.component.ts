import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  filter_text: string = '';

  projects: Project[] = [
    { pid: 1, name: 'Web Cliente a', date: new Date('2018-12-01') },
    { pid: 2, name: 'App Cliente b', date: new Date('2018-10-23') },
  ];
}
