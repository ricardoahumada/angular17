import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnChanges {
  @Input() rating: number = 3;

  @Output() star_clicked: EventEmitter<number> = new EventEmitter<number>();

  starC1ick = (rate: number) => {
    console.log('star clicked...', rate);
    this.star_clicked.emit(rate);
  };

  ngOnChanges(): void {
    console.log('ngOnChanges:', this.rating);
  }
}
