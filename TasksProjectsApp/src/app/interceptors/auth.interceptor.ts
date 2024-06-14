import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _sessionSrv:SessionService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('AuthInterceptor....', request);
    
    const authReq = request.clone({
      setHeaders: { Authorization: `Bearer ${this._sessionSrv.getToken()}` },
    });

    return next.handle(authReq);
  }
}
