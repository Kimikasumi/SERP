import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Funcionario } from '../models/Funcionario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  API_URI = 'http://localhost:3000/workers';

  constructor(private http: HttpClient) { }

  getFuncionarios(){
    return this.http.get(`${this.API_URI}/listado`);
  }

  getFuncionariosAll(){
    return this.http.get(`${this.API_URI}/all`);
  }

  getFuncionario(cedula: string){
    return this.http.get(`${this.API_URI}/getOne/${cedula}`)
  }

  deleteFuncionario(cedula: string){
    return this.http.delete(`${this.API_URI}/delete/${cedula}`);
  }

  saveFuncionario(funcionario:Funcionario){
    return this.http.post(`${this.API_URI}/`,funcionario);
  }

  updateFuncionario(cedula: string|number, updatedFuncionario: Funcionario): Observable<Funcionario>{
    return this.http.put(`${this.API_URI}/update/${cedula}`, updatedFuncionario);
  }

  getCargos(){
    return this.http.get(`${this.API_URI}/getCargos`);
  }

  getModulos(): Observable<Funcionario>{
    return this.http.get(`${this.API_URI}/getModulos`);
  }

  getSucursales(): Observable<Funcionario>{
    return this.http.get(`${this.API_URI}/getSucursales`);
  }

  getFporModulos(cod_modulo: number): Observable<Funcionario>{
    return this.http.get(`${this.API_URI}/getFporModulos/${cod_modulo}`)
  }

  getTotalF(){
    return this.http.get(`${this.API_URI}/getTotalF`)
  }

  getAusencias(){
    return this.http.get(`${this.API_URI}/getAusencias`)
  }

  getEficacia(){
    return this.http.get(`${this.API_URI}/getEficacia`)
  }

  filtroModulos(nom_modulo: string){
    return this.http.get(`${this.API_URI}/filtroModulos/${nom_modulo}`)
  }
}
