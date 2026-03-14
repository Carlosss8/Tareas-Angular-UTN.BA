import { Component, OnInit } from '@angular/core';
import { Productos } from '../services/productos';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './lista-producto.html',
  styleUrl: './lista-producto.css',
})
export class ListaProducto implements OnInit {

  productos: any[] = []
  constructor(private productoService: Productos) { }



  ngOnInit() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        console.log(data)
        this.productos = data
      },
      error: () => console.log("Error al traer los productos")
    })
  }

}
