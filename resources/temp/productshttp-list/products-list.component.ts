import { ChangeDetectionStrategy, Component, computed, effect, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductClass } from '../../models/product-class';
import { ProductService } from '../../services/product.service';
import { ProductHTTPService } from '../../services/producthttp.service';

@Component({
  selector: 'products-http-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListHttpComponent implements OnInit, OnDestroy {

  constructor(public productService: ProductHTTPService) {
  }

  ngOnInit(): void {
  }

  texto: WritableSignal<string> = signal('');
  productos: Array<Product> = this.productService.getProducts();


  updateStars(stars: number, pid: number | undefined) {
    // if (pid) this.productService.updateStars(pid, stars);
  }

  ngOnDestroy(): void {
  }

}
