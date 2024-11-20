import { TestBed } from '@angular/core/testing';
import { ProductHTTPService } from './producthttp.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product';
import { DATA } from '../data/products';


describe('ProductHTTPService', () => {
  let service: ProductHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('get products', () => {
    service.getProducts().subscribe(data => {
      expect(data).not.toBeNull();
    })
  });


});

describe('ProductHTTPService Fake', () => {
  let service: ProductHTTPService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductHTTPService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('get products fake', () => {
    let receivedProds = [] as Product[];
    service.getProducts().subscribe(data => {
      receivedProds = data;
    });

    const request = controller.expectOne('http://localhost:3000/products');
    request.flush(DATA);

    expect(receivedProds).toBe(DATA);

  });


});
