import { Injectable } from '@angular/core';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects: Project[] = [
    {
      pid: 1,
      name: 'Web Client a',
      date: new Date('2021-12-01'),
      rating: 0
    },
    {
      pid: 2,
      name: 'App Client b',
      date: new Date('2023-01-23'),
      rating: 0
    },
    {
      pid: 3,
      name: 'Hibryd Client c',
      date: new Date('2012-11-29'),
      rating: 0
    },
  ];

  private _currentPid: number = 0;

  constructor() {}

  getProjects(): Project[] {
    return this._projects;
  }

  getAproject(pid: number): Project | undefined {
    return this._projects.find((aP) => aP.pid == pid);
  }

  deleteAProject(pid: number): boolean {
    this._projects = this._projects.filter((aP) => aP.pid != pid);
    return true;
  }

  setCurrentProject(pid: number) {
    this._currentPid = pid;
  }

  getCurrentProject(): Project | undefined {
    return this._projects.find((aP) => aP.pid == this._currentPid);
  }

  addProject(aP: Project): boolean {
    if (aP) {
      aP.pid = this._projects.length;
      this._projects.push(aP);
      return true;
    }
    return false;
  }

  
}
