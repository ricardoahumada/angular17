import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LanguageValidator } from 'src/app/validators/language-validatior';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  myform: FormGroup = {} as FormGroup;

  firstName = new FormControl('', [Validators.minLength(3)]);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.email, Validators.required]);

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormGroup(
        {
          firstName: this.firstName,
          lastName: this.lastName,
        },
        Validators.required
      ),
      email: this.email,
      password: new FormControl(),
      language: new FormControl('', LanguageValidator.validateLanguage),
    });
  }

  onSubmit() {
    console.log('onSubmit:', this.myform);
    if (this.myform.valid) {
      //send this to the API
    } else {
      //show a message
    }
  }

  signUpForm = this._fb.group({
    name: this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
    }),
    email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
    password: ['', [Validators.minLength(8), Validators.required]],
    language: [''],
  });
}
