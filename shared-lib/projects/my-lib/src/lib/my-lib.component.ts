import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  title:string = "My Lib Component!"

  ngOnInit(): void {
  }

}
