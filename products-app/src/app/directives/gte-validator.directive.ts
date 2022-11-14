import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appGteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true },
  ],
})
export class GteValidatorDirective implements Validator {
  @Input("gteNum") gteNum:number=0;

  validate(c: FormControl) {
    console.log('GteValidatorDirective:', c);

    const v: number = +c.value;
    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }
    if (v <= +10) {
      return { gte: true, requiredValue: 10 };
    }
    return null;
  }
}
