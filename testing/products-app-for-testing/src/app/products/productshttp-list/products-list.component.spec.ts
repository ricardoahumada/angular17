import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListHttpComponent } from './products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ReplicateDirective } from '../../directives/replicate.directive';
import { FormsModule } from '@angular/forms';

describe('ProductsListHttpComponent', () => {
  let component: ProductsListHttpComponent;
  let fixture: ComponentFixture<ProductsListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListHttpComponent, ReplicateDirective],
      imports: [HttpClientModule, FilterProductsPipe, FormsModule]
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
