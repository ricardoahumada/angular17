import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appQuote]',
})
export class QuoteDirective {
  @Input() politicianQuote: string = '';
  @Input() politicianAuthor: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.innerHTML = `"${this.politicianQuote}" <br> - ${this.politicianAuthor}`;
  }
}
