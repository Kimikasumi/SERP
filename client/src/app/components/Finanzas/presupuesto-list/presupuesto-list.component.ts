import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Presupuesto } from 'src/app/models/presupuesto';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-presupuesto-list',
  templateUrl: './presupuesto-list.component.html',
  styleUrls: ['./presupuesto-list.component.css']
})
export class PresupuestoListComponent implements OnInit {
  presupuesto: Presupuesto = {
    cod_presupuesto: 0,
    area_destino: '',
    estado_presupuesto: '',
    fecha: new Date(),
    dinero_solicitado: 0
  }

  edit: boolean = false;
  constructor(private presupuestoService: PresupuestoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.cod_presupuesto) {
      this.presupuestoService.getPresupuesto().subscribe(
        res => {
          console.log(res);
          this.presupuesto = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  agregarNuevoPresupuesto() {
    console.log(this.presupuesto);
    /*if (this.funcionario.foto = '' && (this.funcionario.cod_genero = 1)) {
      console.log('Entra')
      this.funcionario.foto = 'assets/perfilH.jpg'
    } else if (this.funcionario.foto = '' && (this.funcionario.cod_genero = 2)) {
      this.funcionario.foto = 'assets/perfilM.jpg'
    }*/
    this.presupuestoService.savePresupuesto(this.presupuesto).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/finanzas/editarP']);
      },
      err => console.log(err)
    )

  }

  updatePresupuesto(){
    this.presupuestoService.updatePresupuesto(this.presupuesto.cod_presupuesto, this.presupuesto).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/finanzas/listadoP']);
      },
      err => console.log(err)
    )
  }

}
