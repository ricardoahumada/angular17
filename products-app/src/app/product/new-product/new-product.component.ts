import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  myform: FormGroup | null = null;

  constructor(private _fb: FormBuilder) {}

  signUpForm = this._fb.group({
    name: this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: [ '',
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

  ngOnInit(): void {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
      ]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      language: new FormControl(),
    });
  }
}
