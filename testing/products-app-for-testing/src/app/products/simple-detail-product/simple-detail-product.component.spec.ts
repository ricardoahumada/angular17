import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDetailProductComponent } from './simple-detail-product.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

let fakeActivatedRoute = {
  paramMap: of(convertToParamMap({ pid: '123' })),
  params: of(convertToParamMap({ pid: '123' })),
  queryParamMap: of(convertToParamMap({ query: 'active' }))
};

describe('SimpleDetailProductComponent', () => {
  let component: SimpleDetailProductComponent;
  let fixture: ComponentFixture<SimpleDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleDetailProductComponent],
      providers: [
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
});
