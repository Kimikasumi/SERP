import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupuesto-areas-finanzas',
  templateUrl: './presupuesto-areas-finanzas.component.html',
  styleUrls: ['./presupuesto-areas-finanzas.component.css']
})
export class PresupuestoAreasFinanzasComponent implements OnInit {

  respuesta: any
  data: any[]
  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.data =[['Cuenta','Presupuesto']];
    this.presupuestoService.getPresupuestoAreas().subscribe(
      res => {
        for (var i = 0; i < res['length']; i++){
          this.data.push([res[i].Cuenta, res[i].Presupuesto])
        }
      }
      ,
      err => console.log(err)
    )
  }

}
