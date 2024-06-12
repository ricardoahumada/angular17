import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  myForm: FormGroup = {} as FormGroup;

  firstName = new FormControl('');

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firtName: this.firstName,
        lastName: new FormControl('')
      }),
      email: new FormControl(''),
      password: new FormControl(''),
      language : new FormControl('')
    });

    console.log('myForm:', this.myForm);
    
  }

}
