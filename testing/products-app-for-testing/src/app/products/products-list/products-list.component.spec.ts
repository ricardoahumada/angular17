import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ReplicateDirective } from '../../directives/replicate.directive';
import { FormsModule } from '@angular/forms';
import { RateComponent } from '../../util/rate/rate.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

let fakeActivatedRoute = {
};

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ReplicateDirective],
      imports:[FilterProductsPipe, FormsModule, RateComponent, RouterLink],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
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
