import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudInv } from 'src/app/models/SolicitudInv';

@Component({
  selector: 'app-solicitar-inv-pv',
  templateUrl: './solicitar-inv-pv.component.html',
  styleUrls: ['./solicitar-inv-pv.component.css']
})
export class SolicitarInvPvComponent implements OnInit {

  constructor(private retailerService: RetailersService, private router: Router, private activedRoute: ActivatedRoute) { }

  editar: boolean = false;
  sucursales: any
  productos: any
  solici: SolicitudInv = {
    cod_sucursal: 0,
    cod_producto: 0,
    cantidad: 1,
    cod_estado: 1
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    this.retailerService.getSucursalesUX().subscribe(
      res => {
        this.sucursales = res;
      },
      err => console.log(err)
    )

    this.retailerService.getProducto().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    )
  }

  createSolici() {
    this.retailerService.solicitarInv(this.solici).subscribe(
      res => {
        if(this.solici.cantidad > 0) {
          this.router.navigate(['/retail/listadoPV']);
        }

        else {
          alert('La cantidad no puede ser negativa')
        }
      },
      err => console.log(err)
    )
  }

}
