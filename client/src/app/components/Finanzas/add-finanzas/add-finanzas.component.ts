import { Component, OnInit } from '@angular/core';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-finanzas',
  templateUrl: './add-finanzas.component.html',
  styleUrls: ['./add-finanzas.component.css']
})
export class AddPresupuestoComponent implements OnInit {

  constructor(private presupuestoService: PresupuestoService, private router: Router, private activedRoute: ActivatedRoute) { }

  editar: boolean = false;
  estados: any
  cuentas: any
  repeticiones: any
  presupuestos: Presupuesto = {    
    cod_repeticion_semanal: 1,
    desc_solicitud_presupuesto: '',
    valor_presupuesto: 0,
    area_solicitante: '',
    cod_estado: 1,
    cod_cuenta: 0
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.cod_solicitud_presupuesto) {
      this.presupuestoService.getPresupuestoOne(params.cod_solicitud_presupuesto).subscribe(
        res => {
          this.presupuestos = res;
          this.editar = true;
        },
        err => console.error(err)
      )
    }

    this.presupuestoService.getRepeticion().subscribe(
      res => {
        this.repeticiones = res;
      },
      err => console.log(err)
    )

    this.presupuestoService.getCuenta().subscribe(
      res => {
        this.cuentas = res;
      },
      err => console.log(err)
    )
  }

  createPF() {
    this.presupuestoService.savePresupuesto(this.presupuestos).subscribe(
      res => {
        if(this.presupuestos.valor_presupuesto > 0) {
          this.router.navigate(['/presupuesto/listadoP'])
        }
        
        else {
          alert("El valor no puede ser negativo")
        }
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