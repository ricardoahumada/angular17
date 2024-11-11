import { Directive, ElementRef, HostListener, input, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  standalone: true
})
export class HighlightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  /* @Input()
  highlight:string = ''; */

  highlight = input('');

  @HostListener('click')
  onClick(){
    console.log('HighlightDirective ...clicked');
    const nativeEl = this.el.nativeElement;
    nativeEl.style.backgroundColor = "blue";
  }

  ngOnInit(): void {
    // console.log('HighlightDirective:', this.el);
    const nativeEl = this.el.nativeElement;
    nativeEl.style.backgroundColor = this.highlight();
  }

}
