import { Component, computed, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductHTTPService } from '../../services/producthttp.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './simple-detail-product.component.html',
  styleUrl: './simple-detail-product.component.scss'
})
export class SimpleDetailProductComponent {

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {
  }

  pidS = toSignal(this._route.params.pipe(map(params => params['pid'])));

  productS = computed(() => this._productService.getAProduct(this.pidS()));
  
}
