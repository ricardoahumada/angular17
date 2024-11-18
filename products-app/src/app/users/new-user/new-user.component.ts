import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Signup } from 'src/app/models/signup';
import { LanguageValidator } from 'src/app/validators/language-validatior';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor(private _fb: FormBuilder) { }

  /**** Model driven ****/
  // for this use formControl
  myform: FormGroup = {} as FormGroup;
  firstName = new FormControl('', [Validators.minLength(3)]);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.email, Validators.required]);

  signUpForm: FormGroup = {} as FormGroup;

  /**** For reactive value changes...observable ****/
  searchField = new FormControl();
  searches: string[] = [];

  ngOnInit(): void {
    // for this use formControlName
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

    /**** using form builder ****/
    this.signUpForm = this._fb.group({
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


    /**** Using value changes...observable ****/

    this.searchField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        console.log('term:', term);
        this.searches.push(term);
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

  
  /* **************************** */

  /**** template driven ****/
  model: Signup = new Signup();
  @ViewChild('f')
  sform: any;

  onSubmitTemplate() {
    console.log('onSubmitTemplate model:', this.model);
    console.log('onSubmitTemplate form:', this.sform);
  }


  /* **************************** */

  /* ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && matchingControl.errors.confirmedValidator) {
        return;
      }
      
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  } */

}
