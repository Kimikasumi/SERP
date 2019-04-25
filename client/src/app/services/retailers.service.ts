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

  getOneSucursal(cod_retail: string) {
    return this.http.get(`${this.API_URI}/retail/${cod_retail}`);
  }

  deleteRetail(cod_retail: string) {
    return this.http.delete(`${this.API_URI}/retail/${cod_retail}`)
  }

  saveRetail(sucursal: Sucursal) {
    return this.http.post(`${this.API_URI}/retail/`,sucursal);
  }

  updateRetail(cod_retail: string|number, updatedRetail: Sucursal): Observable<Sucursal>{
    return this.http.put(`${this.API_URI}/retail/${cod_retail}`,updatedRetail);
  }
}
