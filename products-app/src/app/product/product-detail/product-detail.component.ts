import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  code: string = '';
  product: IProduct | null = null;

  ngOnInit(): void {    
    this._route.params.subscribe((params) => {
      console.log('params:', params);
      this.code = params['code'];
      // load product
    });
  }

  goHome() {
    this._router.navigate(['']);
  }

  goProducts() {
    this._router.navigate(['products']);
  }
}
