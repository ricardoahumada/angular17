import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  myForm: FormGroup = {} as FormGroup;

  firstName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]);

  /* reactive */
  searchField = new FormControl();
  searches: string[] = [];

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firtName: this.firstName,
        lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')])
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required, LanguageValidator.validateLanguage])
    });

    console.log('myForm:', this.myForm);

    this.searchField.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        console.log('term:', term);
        this.searches.push(term);
      });
  }


  onSubmit = () => {
    console.log('onSubmit myForm:', this.myForm);
    // revalidar
    if (this.myForm.valid) {
      // enviar a API
    }
  }


  /* Using form builder */
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

  /* Template driven */

  model: Signup = new Signup();

  @ViewChild('f')
  sForm: any;


  onSubmitTemplate = () => {
    console.log('onSubmit sForm:', this.sForm, this.model);
    // revalidar
    if (this.sForm.valid) {
      // enviar a API
      console.log("Envviar model a API....");
      
    }
  }

}
