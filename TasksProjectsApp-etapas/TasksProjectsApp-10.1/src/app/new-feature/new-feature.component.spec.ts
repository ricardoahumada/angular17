import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureComponent } from './new-feature.component';

describe('NewFeatureComponent', () => {
  let component: NewFeatureComponent;
  let fixture: ComponentFixture<NewFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
