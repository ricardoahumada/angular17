import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  myform: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: this.name,
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(8)]),
    language: new FormControl('', [Validators.minLength(8)]),
  })

  ngOnInit(): void {

  }

}
