import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string = 'Products list';
  message: string = 'This is a message';
  show_text: string = 'show';

  show_message: boolean = false;
  show_list: boolean = true;

  products: Array<IProduct> = [];

  constructor(private _productsService: ProductsService,
    private _route: ActivatedRoute
  ) { }


  $projectsSubs: Subscription | null = null;
  _timer: any;

  ngOnInit(): void {
    /*  this._route.queryParams.subscribe((data: any) => {
       console.log('Query params:', data);
       this.products = this._productsService.filterProducts(data.name);
     }) */

    this._timer = setTimeout(() => {
      this.$projectsSubs = this._productsService.getProductsFromAPi().subscribe({
        next: (productos: Array<IProduct>) => {
          this.products = productos;
        },
        error: (error) => {
          console.log("Error en la petición de producots");
        },
        complete: () => {
          console.log("Petición de producots completada");
        },
      });
    }, 500);

  }

  ngOnDestroy(): void {
    if (this.$projectsSubs) this.$projectsSubs.unsubscribe();
    delete (this._timer);
  }


  showHide() {
    this.show_list = !this.show_list;
    this.show_text = this.show_list ? 'hide' : 'show';
  }

  img_src = './assets/imgs/GardenCart.png';

  img_width = 100;
  img_height = 100;

  filter_text: string = '';

  filterProducts(text: string) {
    return this.products.filter((aP) => aP.name.indexOf(text) >= 0);
  }

  updateStars(stars: any, code: string) {
    console.log('updateStars...', stars, code);
    const theProduct = this.products.find((aP) => aP.code == code);
    if (theProduct) theProduct.stars = stars;
  }

}
