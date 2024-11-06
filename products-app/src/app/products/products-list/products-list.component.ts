import { Component } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  unProducto: any = {
    id: 2,
    name: 'Carrito',
    image: 'GardenCart.png'
  }

  texto: string = 'Hola';
  show: boolean = false;

  productos: any[] = [
    {
      "name": "Rastrillo",
      "code": "E-001",
      "image": "LeafRake.png",
      "date": "2022-11-14",
      "price": 19.95,
      "stars": 3
    },
    {
      "name": "Carrito",
      "code": "C-0002",
      "image": "GardenCart.png",
      "date": "2021-01-23",
      "price": 32.99,
      "stars": 4
    },
    {
      "name": "Altavoz",
      "code": "A-001",
      "image": "loudspeaker.png",
      "date": "2024-06-04",
      "price": 29.95,
      "stars": 1
    },
    {
      "name": "Pala",
      "code": "A-001",
      "image": "",
      "date": "2020-09-02",
      "price": 9.95,
      "stars": 3
    }
  ];

  genImgUrl() {
    return './assets/imgs/' + this.unProducto.image;
  }

  mostrar() {
    console.log("Mostrando...", this.texto);
    this.show = !this.show;
  }

}
