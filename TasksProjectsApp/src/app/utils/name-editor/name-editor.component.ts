import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'name-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  description:string='';

  save(){
    this.save_clicked.emit(this.description);
  }

  @Output()
  save_clicked:EventEmitter<string> = new EventEmitter<string>();
  
}
