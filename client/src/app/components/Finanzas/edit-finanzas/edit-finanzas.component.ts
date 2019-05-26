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

  estados: any

  presupuestos: Presupuesto = {
    cod_solicitud_presupuesto: 1,
    cod_repeticion_semanal: 1,
    desc_solicitud_presupuesto: '',
    valor_presupuesto: 0,
    area_solicitante: '',
    cod_estado: 3,
    cod_cuenta: 1
};

  constructor(private presupuestoService: PresupuestoService, private router: Router, private activedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.cod_solicitud_presupuesto) {
      this.presupuestoService.getPresupuestoOne(params.cod_solicitud_presupuesto).subscribe(
        res => {
          this.presupuestos = res;
        },
        err => console.error(err)
      )
    }

    this.presupuestoService.getEstados().subscribe(
      res => {
        this.estados = res;
      },
      err => console.log(err)
    )
  }
  editPF() {
    this.presupuestoService.updatePresupuesto(this.presupuestos.cod_solicitud_presupuesto, this.presupuestos).subscribe(
      res => {
        this.router.navigate(['/presupuesto/listadoP'])
      },
      err => console.log(err)
    )
  
  }

}