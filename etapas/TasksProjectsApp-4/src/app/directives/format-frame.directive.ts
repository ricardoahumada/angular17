import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appFormatFrame]'
})
export class FormatFrameDirective {

  constructor(private el: ElementRef) {
  }

  color = input('yellow')

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color());
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit(): void {
    console.log('FormatFrameDirective:', this.el);
    const nativeEl = this.el.nativeElement;
    nativeEl.style.border = "2px solid red";
    nativeEl.style.textTransform = "upperCase";
  }

}
