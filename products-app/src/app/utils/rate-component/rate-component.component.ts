import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'rate-component',
  templateUrl: './rate-component.component.html',
  styleUrls: ['./rate-component.component.scss'],
})
export class RateComponentComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log('RateComponentComponent ngOnInit');
    this.rating = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RateComponentComponent ngOnChanges:', changes);
  }

  ngOnDestroy(): void {
    console.log('RateComponentComponent ngOnDestroy');
  }

  @Input()
  rating: number = 0;

  starClick(stars: number) {
    console.log('starC1ick:', stars);
    // this.rating=stars;
    this.star_clicked.emit(stars);
  }

  @Output() star_clicked: EventEmitter<number> = new EventEmitter<number>();
}
