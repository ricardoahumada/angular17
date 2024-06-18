import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardGuard } from './guards/can-activate-guard.guard';
import { TareasModule } from './modules/tareas/tareas.module';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectMembersComponent } from './projects/project-detail/project-members/project-members.component';
import { ProjectTasksComponent } from './projects/project-detail/project-tasks/project-tasks.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { ContainerForDynamicComponent } from './dynamic/container-for-dynamic/container-for-dynamic.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {
    path: 'tasks',
    loadChildren: () => TareasModule
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [CanActivateGuardGuard]
  },
  {
    path: 'projects/new', component: NewProjectComponent,
    canActivate: [CanActivateGuardGuard]
  },

  {
    path: 'projects/:pid',
    component: ProjectDetailComponent,
    canActivate: [CanActivateGuardGuard],
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: ProjectTasksComponent },
      { path: 'members', component: ProjectMembersComponent },
    ],
  },
  { path: 'dynamic', component: ContainerForDynamicComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
