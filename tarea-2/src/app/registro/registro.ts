import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  form: FormGroup
  usuarios: any[] = []

  errores: any = {
    nombre: [
      { tipo: "required", mensaje: "El nombre es obligatorio" },
      { tipo: "minlength", mensaje: "El nombre debe tener al menos 3 caracteres" }
    ],
    email: [
      { tipo: "required", mensaje: "El email es obligatorio" },
      { tipo: "email", mensaje: "El email no tiene formato válido" }
    ]
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      mensaje: [""]
    })
  }

  formEnviado = false
  isError = true
  enviar() {
    if (this.form.valid) {
      this.usuarios.push(this.form.value);
      this.form.reset();
      this.formEnviado = true;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
