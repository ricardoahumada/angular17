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

  product: IProduct | undefined = {} as IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _productsSrv: ProductsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((data: any) => {
      console.log('ProductDetailComponent data:', data);
      const code = data.code;
      this.product = this._productsSrv.getAProduct(code);
      console.log('ProductDetailComponent product:', this.product);
    });
  }

  goHome() {
    this._router.navigate(['']);
  }

  goProducts() {
    this._router.navigate(['products']);
  }

}
