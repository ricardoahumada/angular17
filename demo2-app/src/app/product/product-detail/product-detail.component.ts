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
    // ....
  }

  goHome() {
  }

  goProducts() {
  }
  
}
