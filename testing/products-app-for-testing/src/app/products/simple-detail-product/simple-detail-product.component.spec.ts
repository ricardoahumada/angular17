import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDetailProductComponent } from './simple-detail-product.component';

let fakeActivatedRoute = {

};

describe('SimpleDetailProductComponent', () => {
  let component: SimpleDetailProductComponent;
  let fixture: ComponentFixture<SimpleDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleDetailProductComponent],
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
