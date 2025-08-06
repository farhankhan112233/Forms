import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, of } from 'rxjs';

export class CustomValidators {
  static isUnderAge(control: AbstractControl): ValidationErrors | null {
    const dob = new Date(control.value);
    if (!control.value) return null;

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age < 18 ? { isUnderAge: true } : null;
  }
  static nameValidator(): AsyncValidatorFn {
    const notValid = ['farhankhan', 'farhankhan717', 'farhan1122'];

    return (control: AbstractControl) => {
      return of(notValid.includes(control.value)).pipe(
        delay(5000),
        map((isTaken) => {
          return isTaken ? { usernameTaken: true } : null;
        })
      );
    };
  }
}
