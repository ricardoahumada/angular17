import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.isSignedIn()) {
      console.error('Access denied - Redirect to sign-in page');
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }
}
