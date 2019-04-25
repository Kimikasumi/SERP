import { Component, OnInit, HostBinding } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Presupuesto } from 'src/app/models/presupuesto';
@Component({
  selector: 'app-presupuesto-form',
  templateUrl: './presupuesto-form.component.html',
  styleUrls: ['./presupuesto-form.component.css']
})
export class PresupuestoFormComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  presupuestos: any = [];

  constructor(private presupuestoService: PresupuestoService) {

  }

  ngOnInit() {
    this.getPresupuestos();
  }

  getPresupuestos() {
    this.presupuestoService.getPresupuesto().subscribe(
      res => {
        console.log(res)
        this.presupuestos = res;
      }
    )
  }


  deletePresupuesto(cod_presupuesto: string) {
    this.presupuestoService.deletePresupuesto(cod_presupuesto).subscribe(
      res => {
        console.log(res);
        this.getPresupuestos();
      },
      err => console.log(err)
    )
  }


}