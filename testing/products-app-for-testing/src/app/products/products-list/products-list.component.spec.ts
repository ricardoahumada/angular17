import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicateDirective } from '../../directives/replicate.directive';
import { ProductsListComponent } from './products-list.component';


describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ReplicateDirective],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
