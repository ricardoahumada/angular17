import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductClass } from '../../models/product-class';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  constructor() {
    effect(() => {
      console.log("Counter cambio!", this.counter());
    })
  }

  unProducto: Product = {
    id: 2,
    code: 'cd1',
    name: 'Carrito',
    image: 'GardenCart.png'
  }

  texto: WritableSignal<string> = signal('Hola');
  show: WritableSignal<boolean> = signal(false);

  counter: WritableSignal<number> = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  productos: Array<Product> = [
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

  productlist = signal(this.productos);

  totalStarts = computed(() => this.productlist().reduce((acc: number, aP: Product) => acc + (aP.stars ? aP.stars : 0), 0));

  addOne() {
    // this.counter = this.counter + 1;
    this.counter.set(this.counter() + 1);
  }

  genImgUrl() {
    return './assets/imgs/' + this.unProducto.image;
  }

  /* mostrar() {
    console.log("Mostrando...", this.texto);
    this.show = !this.show;
  } */

  updateStars(stars: number, pid: number | undefined) {
    console.log('updateStars:', stars, pid);
    const aProduct = this.productos.find(aP => aP.id == pid);
    if (aProduct) aProduct.stars = stars;

    this.productlist.set([...this.productlist()]);
  }

}
