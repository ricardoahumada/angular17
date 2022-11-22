import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

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
}
