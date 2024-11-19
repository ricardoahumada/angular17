import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';

let fakeActivatedRoute = {
  params: of({ pid: 1 })
};

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProductComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    })
      .compileComponents();

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

});
