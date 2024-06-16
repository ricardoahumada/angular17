import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  constructor() { }

  rowData: any[] = [];
  columnDefs: any[] = [];
  defaultColDef: any;

  ngOnInit() {
    this.rowData = [
      { name: "Task 1", start_date: "2023-05-29 06:00:00", end_date: "2023-06-20 06:00:00" },
      { name: "Task 2", start_date: "2023-05-30 06:00:00", end_date: "2023-06-21 06:00:00" },
      { name: "Task 3", start_date: "2023-05-31 06:00:00", end_date: "2023-06-22 06:00:00" },
      // Add more data as needed
    ];

    this.columnDefs = [
      { headerName: "Task Name", field: "name", filter:true, floatingFilter: true, cellRenderer: CellComponent },
      { headerName: "Start Date", field: "start_date" },
      { headerName: "End Date", field: "end_date" },
      // Add more columns as needed
    ];

    this.defaultColDef = {
      sortable: true,
      filter: true,
    };
  }

}
