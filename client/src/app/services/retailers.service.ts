import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Sucursal } from '../models/Sucursal'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  getSucursales() {
    return this.http.get(`${this.API_URI}/retail/list`);
  }
}
