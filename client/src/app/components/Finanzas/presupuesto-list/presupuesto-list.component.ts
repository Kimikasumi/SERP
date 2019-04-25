import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Presupuesto } from '../../../models/presupuesto';
@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css']
})
export class PresupuestoListComponent implements OnInit {
 
 
  presupuestos: Presupuesto = {};
  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.presupuestoService.getPresupuesto().subscribe(
      res => {
        this.presupuestos = res;
      },
      err => console.log(err)
    )
  }

}
