import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerForDynamicComponent } from './container-for-dynamic.component';

describe('ContainerForDynamicComponent', () => {
  let component: ContainerForDynamicComponent;
  let fixture: ComponentFixture<ContainerForDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerForDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerForDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
