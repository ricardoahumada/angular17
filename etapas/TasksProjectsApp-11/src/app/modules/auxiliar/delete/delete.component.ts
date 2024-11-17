import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  tid:number=0;

  @Output() delete_clicked: EventEmitter<number> = new EventEmitter<number>();

  delete(){
    this.delete_clicked.emit(this.tid);
  }

}
