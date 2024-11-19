import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListHttpComponent } from './products-list.component';

describe('ProductsListHttpComponent', () => {
  let component: ProductsListHttpComponent;
  let fixture: ComponentFixture<ProductsListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
