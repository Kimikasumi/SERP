import { Component, OnInit } from '@angular/core';
import { ProduccionService } from 'src/app/services/produccion.service';

@Component({
  selector: 'app-mayor-prod',
  templateUrl: './mayor-prod.component.html'
})
export class MayorProd implements OnInit {
  nombre;
  constructor(private ProduccionService: ProduccionService) {
    this.nombre="";
  }
  ngOnInit() {
    this.ProduccionService.getMayorProducto().subscribe(
      res=>{
       this.nombre = res[0].nom_m_prima
      },
      err=>console.log(err))
  }
}
