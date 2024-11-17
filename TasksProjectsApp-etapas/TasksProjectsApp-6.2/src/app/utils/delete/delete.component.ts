import { Component, EventEmitter, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  standalone: true
})
export class DeleteComponent implements OnInit {

  ngOnInit(): void {
    
  }
  
  tid= input<number>(0);

  delete_clicked= output<number>();

  delete(){
    this.delete_clicked.emit(this.tid());
  }

}
