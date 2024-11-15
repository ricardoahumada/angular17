import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  constructor(private _http: HttpClient) {
  }

  private productos: Product[] = [];

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/products').pipe(
      tap((data) => {
        console.log('ProductHTTPService.getProducts:', data);
        this.productos = data;
      }),
      catchError(this.errorHandler)
    );
  }

  deleteProduct(pid: number): void {
  }

  addProduct(product: Product): void {
  }

  getAProduct(pid: number) {
  }

  updateStars(pid: number, stars: number) {

  }

  errorHandler(error: any) {
    console.log('Error enla petición:', error);
    return throwError(() => error);
  }

}
