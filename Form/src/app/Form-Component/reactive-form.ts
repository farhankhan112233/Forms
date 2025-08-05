import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidators } from '../CustomValidation';

@Component({
  selector: 'reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  private fb = inject(FormBuilder);
  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl(''),
      userName: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      email: new FormControl('', [Validators.email, Validators.required]),
      DOB: new FormControl('', [
        Validators.required,
        CustomValidators.isUnderAge,
      ]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', [Validators.required]),
        state: new FormControl('', Validators.required),
        zip: new FormControl(''),
      }),
      phone: new FormControl('', Validators.required),
      checkbox: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    if (!this.registrationForm.valid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    console.warn('FormValues', this.registrationForm.value);
    const name = this.registrationForm.getRawValue().firstName;
    alert(`Congrats ${name} Your Form is Submitted`);
  }
  allowOnlyDigits(event: KeyboardEvent): void {
    const isDigit = /^[0-9]$/.test(event.key);
    if (!isDigit) {
      event.preventDefault();
    }
  }
}
