import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.scss'
})
export class DetailProductsComponent {

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {
    
  }

  /* pid = 0;
  product: Product | undefined = {} as Product;
   */// $paramsSubs: any = null;

  pidS = toSignal(this._route.params.pipe(map(params => params['pid'])));
  productS = computed(() => this._productService.getAProduct(this.pidS()));

  /* 
    ngOnInit(): void {
      console.log(this._route.snapshot);
      // this.pid = this._route.snapshot.params['pid'];
      // this.product = this._productService.getAProduct(this.pid);
  
      this.$paramsSubs = this._route.params.subscribe(data => {
        this.pid = data['pid'];
        this.product = this._productService.getAProduct(this.pid);
  
        if (!this.product) this._router.navigate(['not-found'])
      });
  
    }
  
    ngOnDestroy(): void {
      console.log('Destuyendo detalle:', this.pid);
      if (this.$paramsSubs) this.$paramsSubs.unsubscribe();
    } */


}
