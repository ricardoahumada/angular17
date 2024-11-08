import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  standalone: true
})
export class RateComponent {

  @Input()
  rating: number = 0;

  @Output()
  starClicked:EventEmitter<number> = new EventEmitter();

  starClick(val: number) {
    console.log('clicado:', val);
    this.starClicked.emit(val);
  }
}
