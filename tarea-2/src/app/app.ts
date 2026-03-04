import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registro, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea-2');
}
