import { Component, EventEmitter, input, output, Input, InputSignal, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  standalone: true,
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* @Input()
  tid:number=0; */
  tid: InputSignal<number> = input.required<number>();

  // @Output() delete_clicked: EventEmitter<number> = new EventEmitter<number>();
  deleteClick = output<number>();

  delete() {
    this.deleteClick.emit(this.tid());
  }

}
