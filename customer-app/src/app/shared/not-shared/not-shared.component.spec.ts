import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSharedComponent } from './not-shared.component';

describe('NotSharedComponent', () => {
  let component: NotSharedComponent;
  let fixture: ComponentFixture<NotSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
