import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Presupuesto } from '../models/presupuesto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPresupuesto(){
    return this.http.get(`${this.API_URI}/finanzas`);
  }

  getPresupuestoOne(cod_presupuesto: string){
    return this.http.get(`${this.API_URI}/finanzas/${cod_presupuesto}`)
  }

  deletePresupuesto(cod_presupuesto: string){
    return this.http.delete(`${this.API_URI}/finanzas/${cod_presupuesto}`);
  }

  savePresupuesto(presupuesto:Presupuesto){
    return this.http.post(`${this.API_URI}/finanzas`,presupuesto);
  }

  updateEstado(cod_presupuesto: string|number, updatedPresupuesto: Presupuesto): Observable<Presupuesto>{
    return this.http.put(`${this.API_URI}/finanzas/${cod_presupuesto}`, updatedPresupuesto);
  }
}
