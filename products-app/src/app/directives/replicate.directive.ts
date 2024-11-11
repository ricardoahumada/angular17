import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[replicate]'
})
export class ReplicateDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set replicate(n: number) {
    console.log('templateRef:', this.templateRef);

    for (let idx = 0; idx < n; idx++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
