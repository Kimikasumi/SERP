import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProduccionService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3000';

  getProductos(){
    return this.http.get(`${this.API_URI}/Produccion`);
  }

  getProducto(cod_producto: string){
    return this.http.get(`${this.API_URI}/Produccion/${cod_producto}`)
  }
  
  deleteProducto(cod_producto: string){
    return this.http.delete(`${this.API_URI}/Produccion/${cod_producto}`);
    
  }

  saveProducto(producto:Producto){
    return this.http.post(`${this.API_URI}/Produccion`,producto);
  }

  updateProducto(cod_producto: string|number, updatedProducto: Producto): Observable<Producto>{
    return this.http.put(`${this.API_URI}/Produccion/${cod_producto}`, updatedProducto);
  }
}
