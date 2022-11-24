import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  private _products: Array<IProduct> = [
    {
      name: 'Leaf Rake',
      code: 'GUN-0611',
      image: 'LeafRake.png',
      date: new Date(2016, 3, 19),
      price: 19.95,
      stars: 2,
    },
    {
      name: 'Garden Cart',
      code: 'GUN-0023',
      image: 'GardenCart.png',
      date: new Date(2016, 5, 21),
      price: 32.99,
      stars: 5,
    },
  ];

  public getProducts(): IProduct[] {
    return this._products;
  }

  public getAProduct(code: string): IProduct | undefined {
    return this._products.find((aP) => aP.code == code);
  }

  public getProductsFromAPI(): Observable<IProduct[]> {
    const params = new HttpParams().set('code', 'GUN-0611');

    return this._http
      .get<IProduct[]>('http://localhost:3000/productsx', { params })
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl = (error: any) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: 	${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  };
}
