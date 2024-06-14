import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { LoginComponent } from './login/login.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ExtUrlResolverService } from './services/ext-url-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: 'auth',
    component: GitAuthComponent,
    resolve: {
      url: ExtUrlResolverService,
    },
  },
  {
    path: '**',
    component: NoSuchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
