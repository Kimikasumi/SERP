import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  API_URI = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get(`${this.API_URI}/workers`);
  }

  getFuncionario(cod_funcionario: string){
    return this.http.get(`${this.API_URI}/workers/${cod_funcionario}`)
  }

}
