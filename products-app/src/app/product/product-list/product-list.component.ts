import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  title:string = "Products list";
  message:string = "This is a message";
  show_text:string = "show";

  show_message:boolean = false;
  show_list:boolean = true;

  products:Array<IProduct>= [
    {
      name: 'Leaf Rake',
      code: 'GUN-0611',
      image: 'LeafRake.png',
      date: new Date(2016,3,19),
      price: 19.95,
      stars: 3,
    },
    {
      name: 'Garden Cart',
      code: 'GUN-0023',
      image: 'GardenCart.png',
      date: new Date(2016,5,21),
      price: 32.99,
      stars: 4,
    },
  ];

  products2:Product[]=[
    new Product()
  ]

  showHide(){
    this.show_list=!this.show_list;
    this.show_text=this.show_list?"hide":"show";
  }

  img_src="./assets/imgs/GardenCart.png";

  img_width=100;
  img_height=100;

  filter_text:string='';

  filterProducts(text:string){
    return this.products.filter(aP=>aP.name.indexOf(text)>=0);
  }

}
