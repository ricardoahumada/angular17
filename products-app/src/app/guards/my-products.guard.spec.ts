import { TestBed } from '@angular/core/testing';

import { MyProductsGuard } from './my-products.guard';

describe('MyProductsGuard', () => {
  let guard: MyProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
