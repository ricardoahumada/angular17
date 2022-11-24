import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler } from '../handlers/http-error-handler';
import { Project } from '../models/project';
import { SessionService } from './session.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects: Project[] = [
    /* {
      id: 1,
      name: 'Web Client a',
      date: new Date('2021-12-01'),
      team_members: [1, 3],
    },
    {
      id: 2,
      name: 'App Client b',
      date: new Date('2023-01-23'),
      team_members: [1, 2],
    },
    {
      id: 3,
      name: 'Hibryd Client c',
      date: new Date('2012-11-29'),
      team_members: [2, 3],
    }, */
  ];

  private _currentPid: number = 0;

  constructor(private _http: HttpClient, private session: SessionService) {}

  getProjects(): Project[] {
    return this._projects;
  }

  getAproject(pid: number): Project | undefined {
    return this._projects.find((aP) => aP.id == pid);
  }

  deleteAProject(pid: number): boolean {
    this._projects = this._projects.filter((aP) => aP.id != pid);
    return true;
  }

  setCurrentProject(pid: number) {
    this._currentPid = pid;
  }

  getCurrentProject(): Project | undefined {
    return this._projects.find((aP) => aP.id == this._currentPid);
  }

  addProject(aP: Project): boolean {
    if (aP) {
      aP.id = this._projects.length;
      this._projects.push(aP);
      return true;
    }
    return false;
  }

  private $projObsr: Observable<Project[]> | null = null;

  getProjectsFromApi() {
    // const httpOptions = {};
    const httpOptions = this.getRequestOptions();

    this.$projObsr = this._http
      .get<Project[]>(API_URL + '/projects', httpOptions)
      .pipe(
        tap((data) => {
          this._projects = data;
        }),
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
      .post<Project>(`${API_URL}/projects`, JSON.stringify(aP), httpOptions)
      .pipe(retry(1), catchError(HttpErrorHandler.errorHandl));
  }

  private getRequestOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.session.accessToken,
      }),
    };
  }
}
