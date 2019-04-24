import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Funcionario } from '../models/Funcionario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get(`${this.API_URI}/workers/listado`);
  }

  getFuncionariosAll(){
    return this.http.get(`${this.API_URI}/workers/all`);
  }

  getFuncionario(cod_funcionario: string){
    return this.http.get(`${this.API_URI}/workers/getOne/${cod_funcionario}`)
  }

  deleteFuncionario(cod_funcionario: string){
    return this.http.delete(`${this.API_URI}/workers/delete/${cod_funcionario}`);
  }

  saveFuncionario(funcionario:Funcionario){
    return this.http.post(`${this.API_URI}/workers/`,funcionario);
  }

  updateFuncionario(cod_funcionario: string|number, updatedFuncionario: Funcionario): Observable<Funcionario>{
    return this.http.put(`${this.API_URI}/workers/update/${cod_funcionario}`, updatedFuncionario);
  }

  getCargos(){
    return this.http.get(`${this.API_URI}/workers/getCargos`);
  }

  getModulos(){
    return this.http.get(`${this.API_URI}/workers/getModulos`);
  }
}
