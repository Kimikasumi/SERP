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
    return this.http.get(`${this.API_URI}/finanzas`);
  }

  getEstadoOne(id: string){
    return this.http.get(`${this.API_URI}/finanzas/${id}`)
  }

  deleteEstado(id: string){
    return this.http.delete(`${this.API_URI}/finanzas/${id}`);
  }

  saveEstado(estado:Estado){
    return this.http.post(`${this.API_URI}/finanzas`,estado);
  }

  updateEstado(id: string|number, updatedEstado: Estado): Observable<Estado>{
    return this.http.put(`${this.API_URI}/finanzas/${id}`, updatedEstado);
  }
}
