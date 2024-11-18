import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService, protected router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.auth.isSignedIn()){
      this.router.navigate(['/signin']);
      return false;
    }else return true;
  }

}

/* export const canActivateGuard: CanActivateFn = (route, state) => {


  return true;
};
 */