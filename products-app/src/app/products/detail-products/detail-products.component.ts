import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.scss'
})
export class DetailProductsComponent implements OnInit, OnDestroy {

  constructor(private _route: ActivatedRoute, private _productService: ProductService) {
  }

  pid = 0;
  product: Product | undefined = {} as Product;
  $paramsSubs: any = null;

  ngOnInit(): void {
    console.log(this._route.snapshot);
    // this.pid = this._route.snapshot.params['pid'];
    // this.product = this._productService.getAProduct(this.pid);

    this.$paramsSubs = this._route.params.subscribe(data => {
      this.pid = data['pid'];
      this.product = this._productService.getAProduct(this.pid);
    });

  }

  ngOnDestroy(): void {
    console.log('Destuyendo detalle:', this.pid);
    if(this.$paramsSubs) this.$paramsSubs.unsubscribe();
  }

}
