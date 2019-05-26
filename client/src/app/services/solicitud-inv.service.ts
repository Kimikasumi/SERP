import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudInv } from '../models/solicitud_inv';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudInvService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3000';

  getSolicitudesInv(){
    return this.http.get(`${this.API_URI}/SolicitudInventario`);
  }
  getSolicitudesnormalInv(){
    return this.http.get(`${this.API_URI}/SolicitudInventario/list`);
  }

  getSolicitudInv(cod_solicitud: string){
    return this.http.get(`${this.API_URI}/SolicitudInventario/${cod_solicitud}`)
  }
  
  deleteSolicitudInv(cod_solicitud: string){
    return this.http.delete(`${this.API_URI}/SolicitudInventario/${cod_solicitud}`);
    
  }


  saveSolicitudInv(solicitudI:SolicitudInv){
    return this.http.post(`${this.API_URI}/SolicitudInventario`,solicitudI);
  }

  updateSolicitudInv(cod_solicitud: string|number, updateSolicitudI: SolicitudInv): Observable<SolicitudInv>{
    return this.http.put(`${this.API_URI}/SolicitudInventario/${cod_solicitud}`, updateSolicitudI);
  }
}
