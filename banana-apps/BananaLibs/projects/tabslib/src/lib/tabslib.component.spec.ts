import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabslibComponent } from './tabslib.component';

describe('TabslibComponent', () => {
  let component: TabslibComponent;
  let fixture: ComponentFixture<TabslibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabslibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabslibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
