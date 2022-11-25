import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslatePipe } from 'src/app/i18n/translate.pipe';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  app_title: string = 'Tasks & Projects App';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  async showDynamicComponent() {
    const { DynamicComponent } = await import("../../dynamic/dynamic/dynamic.component");
    this.viewRef.clear();    
    this.viewRef.createComponent(DynamicComponent);
  }

  removeDynamicComponent() {
    this.viewRef.clear();
  }
}
