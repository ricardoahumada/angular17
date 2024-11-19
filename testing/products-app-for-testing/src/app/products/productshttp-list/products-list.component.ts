import { ChangeDetectionStrategy, Component, computed, effect, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductClass } from '../../models/product-class';
import { ProductService } from '../../services/product.service';
import { ProductHTTPService } from '../../services/producthttp.service';
import { EventSourceService } from '../../services/EventSourceService';
import { combineLatest, map, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'products-http-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListHttpComponent implements OnInit, OnDestroy {

  constructor(public productService: ProductHTTPService, private eventSourceService: EventSourceService) {
  }

  $obsProd: any = {};
  private $eventSourceSubscription: SubscriptionLike | null = null;

  ngOnInit(): void {
    this.$obsProd = combineLatest([
      this.productService.getProducts(),
      this.eventSourceService.getEvents()
    ]).pipe(
      map(([pds, ep]:[any, any])=>{
        console.log('pds-ep:', pds, ep);
        pds.push(ep);
        return pds;
      })
    )
    .subscribe(data =>{
      console.log('data:', data);
      this.productos = [...data];
    })

  }

  texto: WritableSignal<string> = signal('');
  productos: Array<Product> = [];
  errorMess: boolean = false;

  updateStars(stars: number, pid: number | undefined) {
    // if (pid) this.productService.updateStars(pid, stars);
  }

  delete(id: number | undefined) {
    if(id) this.productService.deleteProduct(id).subscribe(isOK => {
      console.log('Eliminado:', isOK);
    })
  }

  ngOnDestroy(): void {
    if (this.$obsProd) this.$obsProd.unsubscribe();
    if (this.$eventSourceSubscription) this.$eventSourceSubscription.unsubscribe();
    this.eventSourceService.close();
  }

}
