import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-finanzas',
  templateUrl: './listar-finanzas.component.html',
  styleUrls: ['./listar-finanzas.component.css']
})
export class ListarFinanzasComponent implements OnInit {

  presupuestos: any = []
  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    
    this.mostrarP();
  }

  mostrarP() {
    this.presupuestoService.getPresupuesto().subscribe(
      res => {
        this.presupuestos = res;
      },
      err => console.log(err)
    )
  }

  eliminarP(cod_presupuesto: string) {
    console.log(cod_presupuesto);
    this.presupuestoService.deletePresupuesto(cod_presupuesto).subscribe(
      res => {
        this.mostrarP();
      },
      err => console.log(err)
    )
  }
}