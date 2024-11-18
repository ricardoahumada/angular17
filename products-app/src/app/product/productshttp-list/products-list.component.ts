import { ChangeDetectionStrategy, Component, computed, effect, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductClass } from '../../models/product-class';
import { ProductService } from '../../services/product.service';
import { ProductHTTPService } from '../../services/producthttp.service';

@Component({
  selector: 'products-http-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListHttpComponent implements OnInit, OnDestroy {

  constructor(public productService: ProductHTTPService) {
  }

  $obsProd: any = {};

  ngOnInit(): void {
    this.$obsProd = this.productService.getProducts().subscribe(
      {
        next: data => {
          this.errorMess = false;
          console.log('Recibbidos productos en componente: ', data);
          this.productos = data;
        },
        error: errorVal => this.errorMess = true,
        complete: () => console.log('Observable completed')
      }

    );
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
  }

}
