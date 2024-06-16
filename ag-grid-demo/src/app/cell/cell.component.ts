import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.less']
})
export class CellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  params: any;

  agInit(params: any) {
    this.params = params;

    console.log('params:', this.params);
    
  }

}
