import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  myForm: FormGroup = {} as FormGroup;

  firstName = new FormControl('',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]);

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firtName: this.firstName,
        lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')])
      }),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      language : new FormControl('',[Validators.required])
    });

    console.log('myForm:', this.myForm);
    
  }

}
