import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]',
})
export class DelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appDelay(delay: number) {

    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);      
    }, delay*1000);
    
  }
}
