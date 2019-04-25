import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Area } from '../models/area'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getArea(){
    return this.http.get(`${this.API_URI}/finanzas`);
  }

  getAreaOne(id: string){
    return this.http.get(`${this.API_URI}/finanzas/${id}`)
  }

  deleteArea(id: string){
    return this.http.delete(`${this.API_URI}/finanzas/${id}`);
  }

  saveArea(area:Area){
    return this.http.post(`${this.API_URI}/finanzas`,area);
  }

  updateArea(id: string|number, updatedArea: Area): Observable<Area>{
    return this.http.put(`${this.API_URI}/finanzas/${id}`, updatedArea);
  }
}
