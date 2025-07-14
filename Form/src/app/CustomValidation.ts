import { AbstractControl, ValidationErrors } from '@angular/forms';

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
  static nameValidator(username: any) {
    const notValid = ['farhankhan', 'farhankhan717', 'farhan1122']; //instead of API call using an array for now
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (notValid.includes(username)) {
          console.log('Service');
          resolve({ checkUsername: true });
        } else resolve(null);
      }, 2000);
    });
  }
}
