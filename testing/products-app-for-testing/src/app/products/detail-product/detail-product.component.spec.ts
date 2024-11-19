import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';

/* let fakeActivatedRoute = {
  params: of(convertToParamMap({ pid: '123' })),
}; */

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
