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

  /* it('to been called addOne old', async(() => {
    spyOn(component, 'addOne');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.addOne).toHaveBeenCalled();
    });

  })); */

  it('to been called addOne new', fakeAsync(() => {
    spyOn(component, 'addOne');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    const samebutton:HTMLButtonElement = fixture.debugElement.query(By.css('button'),).nativeElement;
    let h2El: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
    let value = h2El.textContent;
    button.click();
    // samebutton.click();
    tick();
    fixture.detectChanges();
    expect(component.addOne).toHaveBeenCalled();
  }));

  it('value been added', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    let h2El: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
    let value = parseInt(h2El.innerText);
    button.click();
    fixture.detectChanges();
    expect(component.value).toEqual(1);
    expect(parseInt(h2El.innerText)).toBe(value + 1);

  });
});
