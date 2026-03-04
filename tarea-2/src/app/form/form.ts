import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  form: FormGroup
  usuarios: any[] = []

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ["", Validators.required, Validators.minLength(3)],
      email: ["", Validators.required, Validators.email],
      mensaje: ["", Validators.required]
    })
  }

  enviar() {
    if (this.form.valid) {
      this.usuarios.push(this.form.value)
      this.form.reset
    }
  }
}
