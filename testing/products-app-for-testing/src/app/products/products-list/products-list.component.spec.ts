import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { ReplicateDirective } from '../../directives/replicate.directive';
import { FormsModule } from '@angular/forms';
import { RateComponent } from '../../util/rate/rate.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

let fakeActivatedRoute = {
};

function findComponent<T>(fixture: ComponentFixture<T>, selector: string,): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ReplicateDirective],
      imports: [FilterProductsPipe, FormsModule, RateComponent, RouterLink],
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


  it('rate exists', () => {
    const { debugElement } = fixture;
    const appRate = debugElement.query(By.css('app-rate'));
    // console.log('...appRate:', appRate);
    expect(appRate).toBeTruthy();
  });

  it('rating has value', () => {
    const appRate = findComponent(fixture, 'app-rate');
    const rating = appRate.componentInstance.rating();
    // console.log('...appRate.rating:', rating);
    expect(rating).toBe(3);
  });

  it('listens for starClicked', () => {
    spyOn(component, 'updateStars');
    const appRate = findComponent(fixture, 'app-rate');
    appRate.triggerEventHandler('starClicked', 4);
    expect(component.updateStars).toHaveBeenCalled()
  });

  it('listens for starClicked', () => {
    spyOn(component, 'updateStars');
    const appRate = findComponent(fixture, 'app-rate');
    const aStar: HTMLSpanElement = appRate.nativeElement.querySelector('span');
    // console.log('......aStar:',aStar);
    aStar.click();
    expect(component.updateStars).toHaveBeenCalled()
  });


});
