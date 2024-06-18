import { Component, OnInit } from '@angular/core';
// import { DynamicComponent } from 'src/app/dynamic/dynamic/dynamic.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  app_title: string = 'Tasks & Projects App';

  ngOnInit(): void {

  }


}
