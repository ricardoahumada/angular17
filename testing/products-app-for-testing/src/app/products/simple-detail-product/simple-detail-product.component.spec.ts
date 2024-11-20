import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDetailProductComponent } from './simple-detail-product.component';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

let fakeActivatedRoute = {
  params: of({ pid: 1 })
};

describe('SimpleDetailProductComponent', () => {
  let component: SimpleDetailProductComponent;
  let fixture: ComponentFixture<SimpleDetailProductComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a product', () => {
    expect(component.pidS() as number).toBe(1);
    expect(component.productS()).not.toBeNull();
    expect(component.productS()).not.toBeUndefined();
  });
});
