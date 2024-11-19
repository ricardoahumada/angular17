import { Component, computed, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductHTTPService } from '../../services/producthttp.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {

  constructor(private _route: ActivatedRoute, private _productService: ProductHTTPService, private _router: Router) {
  }

  pidS = toSignal(this._route.params.pipe(map(params => params['pid'])));

  productS$ = toObservable(this.pidS).pipe(
    switchMap(pidS => this._productService.getAProduct(pidS))
  )
  productS = toSignal(this.productS$);

}
