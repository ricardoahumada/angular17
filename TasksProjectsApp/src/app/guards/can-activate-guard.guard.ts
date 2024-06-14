import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("CanActivateGuardGuard:", route, state);

    if (!this._auth.isSignedIn()) {
      console.log("No tiene token!!");
      this._router.navigate(['/signin']);
    }
    return true;
  }

}
