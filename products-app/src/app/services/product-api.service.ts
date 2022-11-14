import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private _http: HttpClient) {}

  public getProductsFromAPI = () => {
    const params = new HttpParams().set('code', 'GUN-0611');

    /* this._http
      .get<IProduct[]>('http://localhost:3000/products', { params })
      .subscribe({
        next: (data) => {
          console.log('getProductsFromAPI:', data);
          data.forEach((aD) => console.log(aD.code));
        },
        error: (error) => {
          console.log('getProductsFromAPI error:', error);
        },
        complete: () => console.info('complete') 
      }); */
    const request = this._http
      .get<IProduct[]>('http://localhost:3000/products', { params })
      .pipe(retry(1), catchError(this.errorHandl));  

    request.subscribe((data) => console.log('getProductsFromAPI:', data));
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  public addProductToAPI = () => {
    const new_product = {
      name: 'Spray nozzle',
      code: 'GUN-9711',
      image: '',
      date: new Date(2022, 11, 10),
      price: 39.95,
      stars: 0,
    };

    const request = this._http
      .post<IProduct>(
        'http://localhost:3000/products',
        JSON.stringify(new_product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));

    request.subscribe((data) => console.log('addProductToAPI:', data));
  };

  errorHandl = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  };
}