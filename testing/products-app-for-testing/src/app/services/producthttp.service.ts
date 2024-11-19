import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const API_URL = environment.apiULR;

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  constructor(private _http: HttpClient) {
  }

  private productos: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/products', httpOptions).pipe(
      tap((data) => {
        // console.log('ProductHTTPService.getProducts:', data);
        this.productos = data;
      }),
      catchError(this.errorHandler)
    );
  }

  deleteProduct(pid: number): Observable<boolean> {
    return this._http
      .delete(`${API_URL}/products/${pid}`, httpOptions)
      .pipe(retry(1), map(data => {
        const newProds = this.productos.filter(aP => aP.id !== pid);
        this.productos == newProds;
        return true;
      }), catchError(this.errorHandler));
  }

  addProduct(product: Product): Observable<Product> {
    return this._http
      .post<Product>(`${API_URL}/products`, JSON.stringify(product), httpOptions)
      .pipe(retry(1), tap(data => this.productos.push(data)), catchError(this.errorHandler));
  }

  getAProduct(pid: number): Observable<Product> {
    return this._http
      .get<Product>(`${API_URL}/products/${pid}`, httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  updateStars(pid: number, stars: number) {

  }

  errorHandler(error: any) {
    console.log('Error enla petición:', error);
    return throwError(() => error);
  }

}
