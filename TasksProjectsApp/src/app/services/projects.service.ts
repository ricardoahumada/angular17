import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { catchError, map, Observable, of, retry, tap } from 'rxjs';
import { HttpErrorHandler } from '../handlers/http-error-handler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects: Project[] = [
    /* {
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
    }, */
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
    console.log('getProjectsFromApi proyectos actuales: ', this._projects);

    if (this._projects.length > 0) {
      return of(this._projects);
    } else if (this.$projObsr) {
      return this.$projObsr;
    } else {
      const httpOptions = {};

      this.$projObsr = this._http
        .get<Project[]>(API_URL + '/projects', httpOptions)
        .pipe(
          map(proyectos => {
            console.log('datos recibidos proyectos: ', proyectos);
            this._projects = proyectos.map((aP: any) => ({ ...aP, pid: aP.id }));
            return this._projects;
          }),
          /* tap(proyectos => {
            console.log('datos recibidos: ', proyectos);
            this._projects = proyectos;
          }), */
          catchError(HttpErrorHandler.errorHandl)
        );
      return this.$projObsr;
    }
  }

  addProjectToApi(aP: Project): Observable<Project> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this._http
      .post<Project>(API_URL + `/projects`, JSON.stringify(aP), httpOptions)
      .pipe(retry(1),
        tap((newProject: any) => {
          console.log('datos recibidos nuevo proyecto: ', newProject);
          this._projects.push({ ...newProject, pid: newProject.id });
        })
        , catchError(HttpErrorHandler.errorHandl));
  }


}
