import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LanguageValidator } from '../../validators/language-validatior';
import { Signup } from '../../models/signup';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor() { }

  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);

  myform: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: this.name,
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, [this.nameValidator()]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    language: new FormControl('', [Validators.required, LanguageValidator.validateLanguage]),
  })

  ngOnInit(): void {

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

  model: Signup = new Signup();

  @ViewChild('newUserForm')
  newUserF:any;

  submitTemplateForm(){
    if (this.newUserF.valid) {
      console.log('Guardar objeto template:', this.model);
    }
  }

}
