import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { catchError, Observable, retry, tap } from 'rxjs';
import { HttpErrorHandler } from '../handlers/http-error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects: Project[] = [
    {
      pid: 1,
      name: 'Web Client a',
      date: new Date('2021-12-01'),
      rating: 0,
      team_members: [1, 3],
    },
    {
      pid: 2,
      name: 'App Client b',
      date: new Date('2023-01-23'),
      rating: 0,
      team_members: [1, 2],
    },
    {
      pid: 3,
      name: 'Hibryd Client c',
      date: new Date('2012-11-29'),
      rating: 0,
      team_members: [2, 3],
    },
  ];

  private _currentPid: number = 0;

  constructor(
    private _http: HttpClient
  ) { }

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

  private $projObsr: Observable<Project[]> | null = null;

  getProjectsFromApi(): Observable<Project[]> {
    const httpOptions = {};

    this.$projObsr = this._http
      .get<Project[]>('http://localhost:3000/projects', httpOptions)
      .pipe(
        retry(2),
        catchError(HttpErrorHandler.errorHandl)
      );
    return this.$projObsr;
  }

  addProjectToApi(aP: Project): Observable<Project> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http
      .post<Project>(`http://localhost:3000/projects`, JSON.stringify(aP), httpOptions)
      .pipe(retry(1), catchError(HttpErrorHandler.errorHandl));
  }


}
