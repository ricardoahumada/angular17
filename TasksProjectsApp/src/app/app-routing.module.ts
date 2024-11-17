import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGuard } from './feature-flags/feature-flags.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { TasksResolver } from './guards/tasks.resolver';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';
import { ConsumerComponent } from './observables/consumer/consumer.component';
import { SSEComponent } from './sse/sse.component';

const routes: Routes = [
  /* If you want to apply a guard to all routes, use children schema
  {
    path: '', canActivateChild: [AuthenticationGuard], children: [
      { path: 'projects', component: ProjectsListComponent },
    ]
  }, */
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {
    path: 'tasks',
    component: TasksListComponent,
    resolve: { tasks: TasksResolver },
    /* canActivate: [CanActivateGuard], */
  },
  { path: 'tasks/new', component: NewTaskComponent },
  { path: 'tasks/:tid', component: TaskDetailComponent },
  {
    path: 'projects',
    component: ProjectsListComponent,
    /* canActivate: [CanActivateGuard], */
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
  {
    path: 'new-feature',
    loadChildren: () =>
      import('./new-feature/new-feature.module').then(
        (m) => m.NewFeatureModule
      ),
    canLoad: [FeatureGuard],
    data: {
      feature: 'new-feature',
    },
  },
  { path: 'observables', component: ConsumerComponent },
  { path: 'dynamic', component: ContainerForDynamicComponent },
  { path: 'sse', component: SSEComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
