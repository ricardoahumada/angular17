import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { SessionService } from './session.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SignInService {

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/auth/login', {
      email,
      password
    }).pipe(catchError(this.handleError));
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

  
}
