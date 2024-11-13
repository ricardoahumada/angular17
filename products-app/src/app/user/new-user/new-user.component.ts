import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  firstName: FormControl = new FormControl('Juan',[Validators.required, Validators.min(3)]);

  myform: FormGroup = new FormGroup({
    name: this.firstName
  })

  ngOnInit(): void {

  }

}
