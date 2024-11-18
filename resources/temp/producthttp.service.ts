import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  constructor() {
  }

  private _productos: Product[] = [];

  getProducts() {
    return this._productos;
  }

  deleteProduct(pid: number): void {
  }

  addProduct(product: Product): void {
  }

  getAProduct(pid: number) {
  }

  updateStars(pid: number, stars: number) {
   
  }

}
