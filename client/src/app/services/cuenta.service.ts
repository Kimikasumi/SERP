import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  nomina(){
    return this.http.get(`${this.API_URI}/cuenta/nomina`)
  }

  liquidacion(cedula: string){
    return this.http.get(`${this.API_URI}/cuenta/liquidacion/${cedula}`)
  }

  saldo(cod_modulo: string){
    return this.http.get(`${this.API_URI}/cuenta/saldo/${cod_modulo}`)
  }

  update(cod_cuenta:string,saldo:number){
    return this.http.get(`${this.API_URI}/cuenta/update/${cod_cuenta}/${saldo}`)
  }

}
