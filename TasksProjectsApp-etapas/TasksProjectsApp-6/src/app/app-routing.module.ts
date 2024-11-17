import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './utils/delete/not-found/not-found.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'tasks',
    component: TaskListComponent,
  },
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
