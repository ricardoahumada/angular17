import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';
import { DetailProductComponent } from './detail-product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { DATA } from '../../data/products';

const PID = 1;
let fakeActivatedRoute = {
  params: of({ pid: PID })
};

const API_URL = environment.apiULR;
const expectedUrl = `${API_URL}/products/${PID}`;

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      imports: [HttpClientTestingModule, AppRoutingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    })
      .compileComponents();

    controller = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a pid', () => {
    const pid: any = component.pidS();
    expect(pid).toBe(1);
  });

  it('should get a product', () => {
    const request = controller.expectOne(expectedUrl);
    request.flush(DATA[0]);
    controller.verify();

    const aProd = component.productS();
    console.log('....aProd:', aProd);
    
    expect(aProd).not.toBeNull();
    expect(aProd).not.toBeUndefined();
  });

});
