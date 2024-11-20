import { Component, computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { combineLatest, map, Observable, Observer, SubscriptionLike, switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { Product } from 'src/app/models/product';
import { EventSourceService } from 'src/app/services/EventSourceService';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Products list';
  message: string = 'This is a message';
  show_text: string = 'show';

  show_message: boolean = false;
  show_list: boolean = true;

  products: Array<IProduct> = [];

  constructor(private _productsService: ProductsService, private eventSourceService: EventSourceService) {
    effect(() => {
      console.log("Effect: The count is: ", this.count());
    })
  }

  private $productsObs: any = {};
  private $eventSourceSubscription: SubscriptionLike | null = null;


  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2)
  increment() {
    this.count.update(value => value + 1);
  }

  ngOnInit(): void {
    console.log('ProductListComponent count:', this.count());
    // this.products=this._productsService.getProducts();
    /* this.$productsObs = this._productsService.getProductsFromAPI().subscribe({
      next: (data) => {
        this.products = data;
        this.$eventSourceSubscription = this.eventSourceService.
          getEvents().subscribe(data => {
            console.log('SSE data: ', data);
            const prod: any = data;
            this.products = [...this.products, prod];
          });
      },
      error: (err) => {
        console.log('error:', err);
      },
      complete: () => console.info('complete'),
    }); */

    this.$productsObs = combineLatest([
      this._productsService.getProductsFromAPI(),
      this.eventSourceService.getEvents()
    ]).pipe(map(([pl, ep]: [any, any]) => {
      console.log('pl-ep:', pl, ep);
      pl.push(ep);
      return pl;
    })).subscribe(data => {
      console.log('data:', data);
      this.products = [...data];
    });
  }

  products2: Product[] = [new Product()];

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

  updateStars(stars: number, code: string) {
    console.log('updateStars...', stars, code);
    const theProduct = this.products.find((aP) => aP.code == code);
    if (theProduct) theProduct.stars = stars;
  }

  ngOnDestroy() {
    this.$productsObs.unsubscribe();
    if (this.$eventSourceSubscription) this.$eventSourceSubscription.unsubscribe();
    this.eventSourceService.close();
  }
}