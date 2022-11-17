import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rate-component',
  templateUrl: './rate-component.component.html',
  styleUrls: ['./rate-component.component.scss'],
})
export class RateComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  rating: number = 0;

  starClick(stars: number) {
    console.log('starC1ick:', stars);
    // this.rating=stars;
    this.star_clicked.emit(stars);
  }

  @Output() star_clicked: EventEmitter<number> = new EventEmitter<number>();

}
