import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    effect(() => {
      console.log("Products cambio!", this.productList());
    })
  }

  private _productos: Product[] = [
    {
      "id": 1,
      "name": "Rastrillo",
      "code": "E-001",
      "image": "LeafRake.png",
      "date": "2022-11-14",
      "price": 19.95,
      "stars": 3
    },
    {
      "id": 2,
      "name": "Carrito",
      "code": "C-0002",
      "image": "GardenCart.png",
      "date": "2021-01-23",
      "price": 32.99,
      "stars": 4
    },
    {
      "id": 3,
      "name": "Altavoz",
      "code": "A-001",
      "image": "loudspeaker.png",
      "date": "2024-06-04",
      "price": 29.95,
      "stars": 1
    },
    {
      "id": 4,
      "name": "Pala",
      "code": "A-001",
      "image": "",
      "date": "2020-09-02",
      "price": 9.95,
      "stars": 3
    }
  ];

  productList = signal(this._productos);

  /* getProducts() {
    return this._productos;
  }

  deleteProduct(pid: number): void {
    this._productos = this._productos.filter(aP => aP.id != pid);
  } */

  updateStars(pid:number, stars:number){
    const lista = this.productList();
    const aProduct = lista.find(aP => aP.id == pid);
    if (aProduct) aProduct.stars = stars;
    this.productList.set(lista);
  }

}
