import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less']
})
export class RateComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    console.log('RateComponent....constructor');

  }

  ngOnInit(): void {
    console.log('RateComponent....ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RateComponent....ngOnChanges:', changes);
  }


  @Input('rate')
  rating: number = 0;

  @Output()
  star_clicked: EventEmitter<number> = new EventEmitter();

  starClick = (valor: number): void => {
    console.log('emitiendo valor star:', valor);
    // this.rating = valor;
    this.star_clicked.emit(valor);
  }

  ngOnDestroy(): void {
    console.log('RateComponent....ngOnDestroy');

  }

}
