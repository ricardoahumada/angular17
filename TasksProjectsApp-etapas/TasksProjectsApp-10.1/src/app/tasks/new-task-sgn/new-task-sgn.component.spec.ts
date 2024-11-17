import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskSgnComponent } from './new-task-sgn.component';

describe('NewTaskSgnComponent', () => {
  let component: NewTaskSgnComponent;
  let fixture: ComponentFixture<NewTaskSgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTaskSgnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTaskSgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
