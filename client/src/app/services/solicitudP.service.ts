import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudProd } from '../models/SolicitudProd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3000';

  getSolicitudesP(){
    return this.http.get(`${this.API_URI}/SolicitudP`);
  }

  getSolicitudP(cod_solicitud_presupuesto: string){
    return this.http.get(`${this.API_URI}/SolicitudP/${cod_solicitud_presupuesto}`)
  }
  
  deleteSolicitudP(cod_solicitud_presupuesto: string){
    return this.http.delete(`${this.API_URI}/SolicitudP/${cod_solicitud_presupuesto}`);
    
  }

  saveSolicitudP(solicitudP:SolicitudProd){
    return this.http.post(`${this.API_URI}/SolicitudP`,solicitudP);
  }

  updateSolicitudP(cod_solicitud_presupuesto: string|number, updateSolicitudP: SolicitudProd): Observable<SolicitudProd>{
    return this.http.put(`${this.API_URI}/SolicitudP/${cod_solicitud_presupuesto}`, updateSolicitudP);
  }
}
