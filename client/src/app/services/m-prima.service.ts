import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MPrima } from '../models/MPrima';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MPrimaService {
  getProducto: any;

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3000';

  getMPrimas(){
    return this.http.get(`${this.API_URI}/MPrima`);
  }

  getMPrima(cod_m_prima: string){
    return this.http.get(`${this.API_URI}/MPrima/${cod_m_prima}`)
  }
  
  deleteMPrima(cod_m_prima: string){
    return this.http.delete(`${this.API_URI}/MPrima/${cod_m_prima}`);
    
  }

  saveMPrima(mPrima:MPrima){
    return this.http.post(`${this.API_URI}/MPrima`,mPrima);
  }

  updateMPrima(cod_m_prima: string|number, updatedMPrima: MPrima): Observable<MPrima>{
    return this.http.put(`${this.API_URI}/MPrima/${cod_m_prima}`, updatedMPrima);
  }
}
