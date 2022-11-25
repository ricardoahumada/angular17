import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';

@Directive({
  selector: '[appFeatureFlags]',
})
export class FeatureFlagsDirective {
  @Input() featureFlag: string='';

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  ngOnInit() {
    const isEnabled = this.featureFlagService.isFeatureEnabled(this.featureFlag);
    if (isEnabled) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
