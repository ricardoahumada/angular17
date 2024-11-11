import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  standalone: true
})
export class HighlightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input()
  highlight:string = '';

  ngOnInit(): void {
    // console.log('HighlightDirective:', this.el);
    const nativeEl = this.el.nativeElement;
    nativeEl.style.backgroundColor = this.highlight;
  }

}
