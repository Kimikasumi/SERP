import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-solicitudes-finanzas',
  templateUrl: './solicitudes-finanzas.component.html',
  styleUrls: ['./solicitudes-finanzas.component.css']
})
export class SolicitudesFinanzasComponent implements OnInit {

  respuesta: any
  data: any
  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.data =[['Estado','Cantidad']];
    this.presupuestoService.getSolicitudes().subscribe(
      res => {
        for (var i = 0; i < res['length']; i++){
          this.data.push([res[i].Estado, res[i].Cantidad])
        }
      },
      err => console.log(err)
    )
  }

}
