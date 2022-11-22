import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {} as IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _productsSrv: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      console.log('ProductDetailComponent:', data);
      const tempProduct = this._productsSrv.getAProduct(data['code']);
      if (tempProduct) this.product = tempProduct;
    });
  }

  goHome() {
    this._router.navigate(['']);
  }

  goProducts() {
    this._router.navigate(['products']);
  }
  
}
