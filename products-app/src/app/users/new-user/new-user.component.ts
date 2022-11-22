import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() {}
  myform: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('',Validators.minLength(3)),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl(),
    });
  }

}
