import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { DATA } from '../data/products';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns products', () => {
    const arr = service.productList();
    expect(arr).toBe(DATA);
  });
});
