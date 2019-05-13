import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Sucursal } from '../models/Sucursal'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  getSucursales() {
    return this.http.get(`${this.API_URI}/retail`);
  }

  getOneSucursal(cod_sucursal: string) {
    return this.http.get(`${this.API_URI}/retail/${cod_sucursal}`);
  }

  deleteRetail(cod_sucursal: string) {
    return this.http.delete(`${this.API_URI}/retail/${cod_sucursal}`)
  }

  saveRetail(sucursal: Sucursal) {
    return this.http.post(`${this.API_URI}/retail/`,sucursal);
  }

  updateRetail(cod_sucursal: string|number, updatedRetail: Sucursal): Observable<Sucursal>{
    return this.http.put(`${this.API_URI}/retail/${cod_sucursal}`,updatedRetail);
  }
}
