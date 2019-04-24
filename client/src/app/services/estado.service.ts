import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estado } from '../models/estado'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEstado(){
    return this.http.get(`${this.API_URI}/finanzas/listadoE`);
  }

  getEstadoOne(id: string){
    return this.http.get(`${this.API_URI}/finanzas/listadoOneE/${id}`)
  }

  deleteEstado(id: string){
    return this.http.delete(`${this.API_URI}/finanzas/deleteE/${id}`);
  }

  saveEstado(estado:Estado){
    return this.http.post(`${this.API_URI}/finanzas/createE`,estado);
  }

  updateEstado(id: string|number, updatedEstado: Estado): Observable<Estado>{
    return this.http.put(`${this.API_URI}/finanzas/updateE/${id}`, updatedEstado);
  }
}
