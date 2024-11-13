import { PROJECTS } from '../data/projects';
import { Project } from '../models/project';
import { TasksService } from './tasks.service';

/* @Injectable({
  providedIn: 'root',
}) */
export class ProjectsService {

  constructor(private _taskService: TasksService) {}

  private _projects: Project[] = PROJECTS;
  private _currentPid: number = 0;

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

  addProject(aP: Project): boolean {
    if (aP) {
      aP.id = this._projects.length;
      this._projects.push(aP);
      return true;
    }
    return false;
  }

  setCurrentProject(pid: number) {
    this._currentPid = pid;
  }

  getCurrentProject(): Project | undefined {
    return this._projects.find((aP) => aP.id == this._currentPid);
  }

}
