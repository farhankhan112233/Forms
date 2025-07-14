import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ProfileEditor } from './profile-editor/profile-editor';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ProfileEditor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
