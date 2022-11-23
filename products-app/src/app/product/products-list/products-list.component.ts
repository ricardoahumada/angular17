import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { ProductApiService } from 'src/app/services/product-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private _productsService: ProductsService,
    private _productsAPIService: ProductApiService
  ) {}

  private $productsSuscription: Subscription | null = null;

  show_text = true;
  text = 'Available products';

  no_products: string = 'No products at the moment...';

  img_width: number = 100;
  img_height: number = 100;

  products: IProduct[] = []; /*  = [
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
  ]; */

  productObjs: Product[] = [
    new Product(
      'Leaf Rake',
      'GUN-0611',
      'LeafRake.png',
      new Date(2016, 3, 19),
      19.95,
      3
    ),
    new Product(
      'Garden Cart',
      'GUN-0023',
      'GardenCart.png',
      new Date(2016, 5, 21),
      32.99,
      4
    ),
  ];

  show_imgs: boolean = false;
  showImages = (): void => {
    this.show_imgs = !this.show_imgs;
  };

  filter_text: string = '';

  onRatingClicked = (new_rating: number, code: string) => {
    console.log('onRatingClicked:', new_rating, code);
    // process the input
  };

  $products: IProduct[] | null = null;

  ngOnInit() {
    console.log(`Spy #${this.products} onInit`);
    // this.products = this._productsService.getProducts();
    console.log('ngOnInit...');

    /* this._productsService.getProducts().subscribe((prods) => {
      this.products = prods;
    }); */

    // this._productsAPIService.addProductToAPI();
    // this._productsAPIService.getProductsFromAPI();
    this.$productsSuscription = this._productsAPIService
      .getProductsStore()
      .subscribe({
        next: (data) => {
          console.log('getProductsStore success:', data);
          this.products=data;
        },
        error: (err) => {
          console.log('getProductsStore error:', err);
        },
      });
  }

  ngOnChanges() {
    console.log(`Spy #${this.products} onInit`);
  }

  ngOnDestroy() {
    console.log(`Spy #${this.products} onDestroy`);
    this.$productsSuscription?.unsubscribe();
  }
}
