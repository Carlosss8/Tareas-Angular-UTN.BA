import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre: string = "Carlos"
  imagenURL = "/111322335.png"
  protected readonly title = signal('tarea-1');
}
