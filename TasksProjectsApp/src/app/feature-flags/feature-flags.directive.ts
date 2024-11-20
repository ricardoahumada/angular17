import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';

@Directive({
  selector: '[appFeatureFlags]',
  standalone: true,
})
export class FeatureFlagsDirective {
  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private featureFlagService: FeatureFlagsService
  ) {}

  @Input() set appFeatureFlags(feature: string) {
    const isEnabled = this.featureFlagService.isFeatureEnabled(feature);
    this.vcr.clear();
    if (isEnabled) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
