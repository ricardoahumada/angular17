import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
