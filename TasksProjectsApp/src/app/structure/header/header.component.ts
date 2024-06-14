import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { DynamicComponent } from 'src/app/dynamic/dynamic/dynamic.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }


  app_title: string = 'Tasks & Projects App';

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  ngOnInit(): void {

  }

  showDynamicComponent = async () => {
    const { DynamicComponent } = await import('src/app/dynamic/dynamic/dynamic.component');
    this.viewRef.clear();
    this.viewRef.createComponent(DynamicComponent);
  }

  removeDynamicComponent = () => {
    this.viewRef.clear();
  }

}
