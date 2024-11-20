import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { DATA } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    /* effect(() => {
      console.log("ProductService - Products cambio!", this.productList());
    }) */
  }

  private _productos: Product[] = DATA;

  productList = signal(this._productos);

  getAProduct(pid: number) {
    return this._productos.find(aP => aP.id == pid);
  }

  updateStars(pid: number, stars: number) {
    const lista = [...this._productos];
    const aProduct = lista.find(aP => aP.id == pid);
    if (aProduct) aProduct.stars = stars;
    this.productList.set(lista);
  }

}
