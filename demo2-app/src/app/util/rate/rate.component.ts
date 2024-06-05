import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less']
})
export class RateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input('rate')
  rating: number = 0;

  @Output() 
  start_clicked: EventEmitter<number> = new EventEmitter();

  starClick = (valor: number): void => {
    console.log('emitiendo valor star:', valor);
    // this.rating = valor;
    this.start_clicked.emit(valor);
  }

}
