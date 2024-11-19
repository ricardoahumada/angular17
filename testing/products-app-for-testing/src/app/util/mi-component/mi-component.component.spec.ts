import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiComponentComponent } from './mi-component.component';

describe('MiComponentComponent', () => {
  let component: MiComponentComponent;
  let fixture: ComponentFixture<MiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
