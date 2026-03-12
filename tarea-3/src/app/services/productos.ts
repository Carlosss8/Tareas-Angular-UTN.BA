import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private productsApi = "https://api.escuelajs.co/api/v1/products"

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.productsApi)
  }

  addProductos(products: any): Observable<any> {
    return this.http.post<any>(this.productsApi, products)
  }

  deleteProductos(id: any): Observable<any> {
    return this.http.delete<any>(`${this.productsApi}/${id}`)
  }

}
