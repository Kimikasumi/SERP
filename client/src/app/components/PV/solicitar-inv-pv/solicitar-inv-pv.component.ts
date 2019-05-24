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

  solici: SolicitudInv = {
    cod_solicitud: 0,
    cod_sucursal: 0,
    cod_producto: 0,
    cantidad: 1,
    cod_estado: 1
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
  }

  createSolici() {
    this.retailerService.solicitarInv(this.solici).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/retail/listadoPV']);
      },
      err => console.log(err)
    )
  }

}
