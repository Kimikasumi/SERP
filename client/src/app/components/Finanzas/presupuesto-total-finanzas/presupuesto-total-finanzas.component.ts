import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupuesto-total-finanzas',
  templateUrl: './presupuesto-total-finanzas.component.html'
})
export class PresupuestoTotalFinanzasComponent implements OnInit {

  presupuesto_total: any
  constructor(private presupuestoService: PresupuestoService) { }
  ngOnInit() {
    this.presupuestoService.getPresupuestoTotal().subscribe(
      res => {
        this.presupuesto_total = res[0].Presupuesto
        console.log(res)
      }
      ,
      err => console.log(err)
    )
  }

}
