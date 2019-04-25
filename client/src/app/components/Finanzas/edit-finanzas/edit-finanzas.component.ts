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

  editar: boolean = false;

  presupuestos: Presupuesto = {
    cod_presupuesto: 0,
    area_destino: '',
    estado_presupuesto: '',
    fecha: new Date(),
    dinero_solicitado: 0
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.cod_presupuesto) {
      this.presupuestoService.getPresupuestoOne(params.cod_presupuesto).subscribe(
        res => {
          console.log(res)

          this.presupuestos = res;
          this.editar = true;
        },
        err => console.error(err)
      )
    }
  }
  editPF() {
    console.log(this.presupuestos)
    this.presupuestoService.updatePresupuesto(this.presupuestos.cod_presupuesto, this.presupuestos).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/presupuesto/updateP'])
      },
      err => console.log(err)
    )
  }

}