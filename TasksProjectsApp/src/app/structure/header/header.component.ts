import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslatePipe } from 'src/app/i18n/translate.pipe';
import { TranslateService } from 'src/app/i18n/translate.service';
import { FeatureFlagsDirective } from 'src/app/feature-flags/feature-flags.directive';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule,TranslatePipe, FeatureFlagsDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _translate:TranslateService) {}

  ngOnInit(): void {}

  app_title: string = 'Tasks & Projects App';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  async showDynamicComponent() {
    const { DynamicComponent } = await import(
      '../../dynamic/dynamic/dynamic.component'
    );
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }

  removeDynamicComponent() {
    this.viewRef.clear();
  }

  setLang(lang: string) {
    this._translate.use(lang);
  }
}
