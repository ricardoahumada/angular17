import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { DynamicComponent } from '../../dynamic/dynamic/dynamic.component';

@Component({
  selector: 'app-container-for-dynamic',
  templateUrl: './container-for-dynamic.component.html',
  styleUrls: ['./container-for-dynamic.component.scss']
})
export class ContainerForDynamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  async showDynamicComponent() {
    const { DynamicComponent } = await import('../../dynamic/dynamic/dynamic.component');
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }

  async showFlexDynamicComponent(code: string) {
    let dynamicModule: any;
    if (code == 'DynamicComponent') dynamicModule = await import('../../dynamic/dynamic/dynamic.component');
    else dynamicModule = null;

    console.log('dynamicModule:', dynamicModule);

    this.viewRef.clear();
    if (dynamicModule) this.viewRef.createComponent(dynamicModule[code]);
  }

  removeDynamicComponent() {
    this.viewRef.clear();
  }

}
