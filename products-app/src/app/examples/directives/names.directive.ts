import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNames]',
})
export class NamesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appNames(secretSentence: string) {
    if (secretSentence === 'show presidents please' && this.templateRef) {      
      this.viewContainer.createEmbeddedView(this.templateRef);      
    } else {
      this.viewContainer.clear();
    }
  }
}
