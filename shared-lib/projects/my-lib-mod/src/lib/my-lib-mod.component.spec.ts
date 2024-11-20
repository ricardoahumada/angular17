import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibModComponent } from './my-lib-mod.component';

describe('MyLibModComponent', () => {
  let component: MyLibModComponent;
  let fixture: ComponentFixture<MyLibModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyLibModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLibModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
