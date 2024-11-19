import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();// shpw methods of expert
  });

  it('should content title', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Native element idem DOM Element...show props and methods
    expect(compiled.querySelector('h2')?.textContent).toContain('Ooopss');
  });
});
