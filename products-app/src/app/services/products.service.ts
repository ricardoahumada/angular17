import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products: IProduct[] = [
    {
      name: 'Leaf Rake serv',
      code: 'GUN-0611',
      image: 'LeafRake.png',
      date: new Date(2016, 3, 19),
      price: 19.95,
      stars: 3,
    },
    {
      name: 'Garden Cart serv',
      code: 'GUN-0023',
      image: 'GardenCart.png',
      date: new Date(2016, 5, 21),
      price: 32.99,
      stars: 4,
    },
  ];

  private $productssObs = new BehaviorSubject<IProduct[]>(this._products);

  constructor() {}

  /* public getProducts = (): IProduct[] => {
    return this._products;
  };

  public deleteProduct = (code: string): boolean => {
    return true;
  }; */

  public getProducts = (): BehaviorSubject<IProduct[]> => {
    return this.$productssObs;
  };

  public deleteProduct = (code: string)  => {
    this.$productssObs.next(this._products);
    return true;
  };
}
