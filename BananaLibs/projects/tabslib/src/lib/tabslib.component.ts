import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TabslibService } from './tabslib.service';

@Component({
  selector: 'banana-tabs',
  templateUrl: './tabslib.component.html',
  styleUrls: ['./tabslib.component.less']
})
export class TabslibComponent implements OnInit {

  constructor(private _tbsSrv: TabslibService) { }

  codes: string[] = [];

  @ViewChild('dynamicTab', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  ngOnInit(): void {
    this._tbsSrv.getCodes().subscribe((data: string[]) => {
      this.codes = data;
    });

    this._tbsSrv.getTabs().subscribe((data: any[]) => {
      if (data && data.length > 0) this.showFlexDynamicComponent(data[data.length - 1])
    });

  }

  showFlexDynamicComponent(aTab: any) {
    console.log('TabslibComponent.showFlexDynamicComponent:', aTab);

    this.viewRef.clear();
    if (aTab) this.viewRef.createComponent(aTab);
  }

}
