import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(cedula: number,contrasenia: string){
    return this.http.get(`${this.API_URI}/Usuario/${cedula}/${contrasenia}`)
  }

}
