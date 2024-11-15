import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageValidator } from '../../validators/language-validatior';
import { Signup } from '../../models/signup';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  nameAlone: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);

  myform: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: this.nameAlone,
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, [this.nameValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    language: new FormControl('', [Validators.required, LanguageValidator.validateLanguage]),
  })

  ngOnInit(): void {
    this.nameAlone.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(value =>{
      console.log('nameAlone changed:', value);
    });

  }

  nameValidator(): any {
    return (name: FormGroup) => {
      // console.log('nameValidator:', name);
      return null;
    };
  }

  submitForm() {
    if (this.myform.valid) {
      console.log('Guardar objeto:', this.myform.value);

    }

  }

  /* *** template **** */

  signupModel: Signup = new Signup();

  @ViewChild('newUserForm')
  newUserF:any;

  submitTemplateForm(){
    if (this.newUserF.valid) {
      console.log('Guardar objeto template:', this.signupModel);
    }
  }

}
