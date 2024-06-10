import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

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
export class AppRoutingModule {}
