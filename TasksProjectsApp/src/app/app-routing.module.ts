import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'tasks', component: TasksListComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
