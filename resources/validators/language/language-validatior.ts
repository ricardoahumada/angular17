import { AbstractControl } from '@angular/forms';

export class LanguageValidator {
  static validateLanguage = (control: AbstractControl) => {
    if (!(control.value.length >= 2) || control.value.includes('*')) {
      return { invalidLanguage: true };
    }
    return null;
  };
}
