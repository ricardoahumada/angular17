import { Directive, ElementRef, HostListener, input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]', 
  standalone: true,
})
export class HighlightDirective implements OnInit {

  constructor(private el: ElementRef) { }

  highlight = input('');

  @HostListener('click')
  onClick(){
    console.log('HighlightDirective ...clicked');
    const nativeEl = this.el.nativeElement;
    nativeEl.style.backgroundColor = "beige";
  }

  ngOnInit(): void {
    // console.log('HighlightDirective:', this.el);
    const nativeEl = this.el.nativeElement;
    nativeEl.style.backgroundColor = this.highlight();
  }

}
