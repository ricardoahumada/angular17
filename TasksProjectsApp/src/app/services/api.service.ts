import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private session: SessionService,
    private auth: AuthService,

  ) {
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/auth/login', {
      email,
      password
    }).pipe(tap((data:any) => {
      this.auth.doSignIn(data.access_token);
    }), catchError(this.handleError));
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }


}
