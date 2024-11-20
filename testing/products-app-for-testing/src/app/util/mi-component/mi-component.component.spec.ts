import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { MiComponentComponent } from './mi-component.component';
import { By } from '@angular/platform-browser';

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

  it('calls addOne when clicked', fakeAsync(() => {
    spyOn(component, 'addOne');

    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    const sameButton = fixture.debugElement.query(By.css('button'));
    const h2: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
    let valueH2 = parseInt(h2.innerText);

    button.click();
    tick();
    fixture.detectChanges();
    expect(component.addOne).toHaveBeenCalled();
  }));
  
  it('calls addOne when clicked', () => {
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button');
    const h2: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
    let valueH2 = parseInt(h2.innerText);
    button.click();
    fixture.detectChanges();
    expect(parseInt(h2.innerText)).toBe(valueH2 + 1);
  });

  


});
