import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic',
  standalone: true, // comment for module component
  imports: [CommonModule], // comment for module component
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent {
  show: boolean = false;
  clickCallback() {
    console.log('clickCallback: button clicked ...');
    this.show=true;
  }
}


/* Uncomment if NOT standalone component */
/* @NgModule({
  declarations: [DynamicComponent],
  imports: [
      CommonModule
  ],
  providers: [],
  bootstrap: [DynamicComponent],
})
export class DynamicFormModule {
  constructor() {
  }
} */
