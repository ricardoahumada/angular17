import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SimpleDetailProductComponent } from './simple-detail-product.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';

let fakeActivatedRoute = {
  params: of({ pid: 1 }),
  paramMap: of(convertToParamMap({ pid: '1' })),
  queryParamMap: of(convertToParamMap({ query: 'active' }))
};

describe('SimpleDetailProductComponent', () => {
  let component: SimpleDetailProductComponent;
  let fixture: ComponentFixture<SimpleDetailProductComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleDetailProductComponent],
      providers: [
        ProductService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SimpleDetailProductComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a product', () => {
    const pid: any = component.pidS();
    const aProd = component.productS();
    expect(pid).toBe(1);
    expect(aProd).not.toBeNull();
  });

});
