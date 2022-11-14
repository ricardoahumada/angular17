import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  myform: FormGroup = new FormGroup({});
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      language: new FormControl('', [this.ValidateLanguage]),
    });

    this.searchField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        console.log('term:', term);
        this.searches.push(term);
      });
  }

  ValidateLanguage = (control: AbstractControl) => {
    if (!(control.value.length >= 2) || control.value.includes('*')) {
      return { invalidLanguage: true };
    }
    return null;
  };

  /* onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
    }
  } */

  searchField = new FormControl();
  searches: string[] = [];

  model: Signup = new Signup();

  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      this.form.reset();
    }
  }

}
