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

  getFuncionario(cedula: string){
    return this.http.get(`${this.API_URI}/workers/getOne/${cedula}`)
  }

  deleteFuncionario(cedula: string){
    return this.http.delete(`${this.API_URI}/workers/delete/${cedula}`);
  }

  saveFuncionario(funcionario:Funcionario){
    return this.http.post(`${this.API_URI}/workers/`,funcionario);
  }

  updateFuncionario(cedula: string|number, updatedFuncionario: Funcionario): Observable<Funcionario>{
    return this.http.put(`${this.API_URI}/workers/update/${cedula}`, updatedFuncionario);
  }

  getCargos(){
    return this.http.get(`${this.API_URI}/workers/getCargos`);
  }

  getModulos(){
    return this.http.get(`${this.API_URI}/workers/getModulos`);
  }

  getSucursales(){
    return this.http.get(`${this.API_URI}/workers/getSucursales`);
  }
}
