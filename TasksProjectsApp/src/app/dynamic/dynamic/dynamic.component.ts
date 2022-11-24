import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule],
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
