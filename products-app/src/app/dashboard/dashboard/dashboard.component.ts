import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { DynamicComponent } from '../../dynamic/dynamic/dynamic.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef={} as ViewContainerRef;

  async loadDynamicComponent() {
    const { DynamicComponent } = await import("../../dynamic/dynamic/dynamic.component");
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }

  /* showDynamicComponent(): void {
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }
 */
  removeDynamicComponent(): void {
    this.viewRef.clear();
  }
}
