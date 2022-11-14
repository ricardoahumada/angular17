import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    console.log('HighlightDirective:',el);
    
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
