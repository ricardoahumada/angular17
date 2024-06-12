import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) { }

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

  public filterProducts(str: string): IProduct[] {
    if (!str) return this._products;
    else return this._products.filter(aP => aP.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()));
  }

  public getAProduct(code: string): IProduct | undefined {
    return this._products.find((aP) => aP.code == code);
  }

  public getProductsFromAPi = (): Observable<IProduct[]> => {
    const uri = "http://localhost:3000/products";
    return this._http.get<IProduct[]>(uri);
  }


}
