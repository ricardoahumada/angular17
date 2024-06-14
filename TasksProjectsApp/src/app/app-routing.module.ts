import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {
    path: 'tasks',
    component: TaskListComponent,
  },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:tid', component: TaskDetailComponent },
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  { path: 'projects/new', component: NewProjectComponent },

  {
    path: 'projects/:pid',
    component: ProjectDetailComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent },
      { path: 'members', component: ProjectMembersComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
