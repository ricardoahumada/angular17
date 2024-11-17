import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureFlagsService } from './feature-flags.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureGuard implements CanLoad {
  constructor(
    private featureFlagsService: FeatureFlagsService,
    private _router: Router
  ) {}

  canLoad( route: Route, segments: UrlSegment[]  ):| Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean| UrlTree {

    console.log('FeatureGuard:', route);
    
    const {
      data: { feature },
    } = route as any;

    if (feature) {
      const isEnabled = this.featureFlagsService.isFeatureEnabled(feature);
      if (isEnabled) {
        return true;
      }
    }

    this._router.navigate(['/']);
    return false;
  }
}
