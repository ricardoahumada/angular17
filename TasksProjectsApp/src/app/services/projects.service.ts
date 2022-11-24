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
      team_members: [1, 3],
    },
    {
      pid: 2,
      name: 'App Client b',
      date: new Date('2023-01-23'),
      team_members: [1, 2],
    },
    {
      pid: 3,
      name: 'Hibryd Client c',
      date: new Date('2012-11-29'),
      team_members: [2, 3],
    },
  ];

  private _currentPid: number = 0;

  constructor() {}

  getProjects(): Project[] {
    return this._projects;
  }

  getAproject(pid: number): Project | undefined {
    return this._projects.find((aT) => aT.pid == pid);
  }

  deleteAProject(pid: number): boolean {
    this._projects = this._projects.filter((aT) => aT.pid != pid);
    return true;
  }

  setCurrentProject(pid: number) {
    this._currentPid = pid;
  }

  getCurrentProject(): Project | undefined {
    return this._projects.find((aP) => aP.pid == this._currentPid);
  }

  addProject(aP: Project):boolean {
    if (aP) {
      this._projects.push(aP);
      return true;
    }
    return false;
  }
}
