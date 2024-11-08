import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  standalone: true
})
export class RateComponent {

  /* @Input()
  rating: number = 0;
 */
  rating = input<number>(0);

  /* @Output()
  starClicked:EventEmitter<number> = new EventEmitter();
 */

  starClicked = output<number>();

  starClick(val: number) {
    this.starClicked.emit(val);
  }
}
