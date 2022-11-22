import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective{

  @Input()
  color:string="";

  @Input()
  user:any={};

  constructor(private el: ElementRef) {    
  }

  ngOnInit(): void {
    console.log('HighlightDirective:', this.el);
    const nativeEl=this.el.nativeElement;
    nativeEl.style.backgroundColor = this.color;
    nativeEl.innerHTML += `<div>${JSON.stringify(this.user)}</div>`;
  }

}
