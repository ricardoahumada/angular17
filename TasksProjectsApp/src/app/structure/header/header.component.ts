import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeatureFlagsDirective } from 'src/app/feature-flags/feature-flags.directive';
import { TranslatePipe } from 'src/app/i18n/translate.pipe';
import { TranslateService } from 'src/app/i18n/translate.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, TranslatePipe, FeatureFlagsDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _translate: TranslateService) { }

  ngOnInit(): void { }

  app_title: string = 'Tasks & Projects App';


  setLang(lang: string) {
    this._translate.use(lang);
  }
}
