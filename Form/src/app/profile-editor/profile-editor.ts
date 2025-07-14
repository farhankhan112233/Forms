import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidators } from '../CustomValidation';
import {
  MatDatepicker,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
@Component({
  selector: 'app-profile-editor',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css',
})
export class ProfileEditor {
  private fb = inject(FormBuilder);
  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: [''],
      userName: ['', Validators.required, CustomValidators.nameValidator],
      gender: ['male'],
      email: ['', [Validators.email, Validators.required]],
      DOB: ['', [Validators.required, CustomValidators.isUnderAge]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        zip: [''],
      }),
      phone: ['', [Validators.required]],
      checkbox: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    console.warn('FormValues', this.registrationForm.value);
  }
  allowOnlyDigits(event: KeyboardEvent): void {
    const isDigit = /^[0-9]$/.test(event.key);
    if (!isDigit) {
      event.preventDefault();
    }
  }
}
