import { Component, OnInit } from '@angular/core';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-finanzas',
  templateUrl: './edit-finanzas.component.html',
  styleUrls: ['./edit-finanzas.component.css']
})
export class EditFinanzasComponent implements OnInit {

  
  constructor(private presupuestoService: PresupuestoService, private router: Router, private activedRoute: ActivatedRoute) { }

  public presupuestos: Presupuesto = {};

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.cod_presupuesto) {
      this.presupuestoService.getPresupuesto(params.cod_presupuesto).subscribe(
        res => {
          console.log(res)

          this.presupuestos[0] = res;
        },
        err => console.error(err)
      )
    }
  }
  editPF() {
    console.log(this.presupuestos)

  }

}