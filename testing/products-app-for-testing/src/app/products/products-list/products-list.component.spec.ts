import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { ReplicateDirective } from '../../directives/replicate.directive';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ProductsListComponent } from './products-list.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RateComponent } from '../../util/rate/rate.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

function findComponent<T>(fixture: ComponentFixture<T>, selector: string,): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}
let fakeActivatedRoute = {
};

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ReplicateDirective],
      imports:[FilterProductsPipe, FormsModule, RateComponent, RouterLink],
      providers:[
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

  it('rating has value', () => {
    const appRate = findComponent(fixture, 'app-rate');
    const rating = appRate.componentInstance.rating();
    expect(rating).toBe(3);
  });

  it('listens for starClicked', () => {
    spyOn(component,'updateStars')
    const appRate = findComponent(fixture, 'app-rate');
    appRate.triggerEventHandler('starClicked');
    expect(component.updateStars).toHaveBeenCalled();
  });


});
