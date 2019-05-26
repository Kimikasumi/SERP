import { Component, OnInit } from '@angular/core';
import { SolicitudProd2 } from 'src/app/models/SolicitudProd';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitudP.service';

@Component({
  selector: 'app-agregar-solicitud',
  templateUrl: './agregar-solicitud.component.html',
  styleUrls: ['./agregar-solicitud.component.css']
})
export class AgregarSolicitudComponent implements OnInit {

  constructor(private servicioSolicitudP: SolicitudService, private router: Router, private activedRoute: ActivatedRoute) { }

  solicitud: SolicitudProd2 = {
    cod_repeticion_semanal: 0,
    desc_solicitud_presupuesto: '',
    valor_presupuesto: 0,
    area_solicitante: 'RRHH',
    cod_estado: 1,
    cod_cuenta: 3
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.servicioSolicitudP.getSolicitudP(params.id).subscribe(
        res => {
          console.log(res)
          this.solicitud = res;
        },
        err => console.error(err)
      )
    }
  }

  GuardarSolicitud(){
    this.servicioSolicitudP.saveSolicitudP(this.solicitud).subscribe(
      res=>{
        this.router.navigate(['/workers/listarSolicitud'])
      },
      err => console.error(err)
    )
    console.log(this.solicitud);
  }

  actualizarSolicitud(){
    console.log(this.solicitud)
    this.servicioSolicitudP.updateSolicitudP(this.solicitud.cod_solicitud_presupuesto, this.solicitud).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/workers/listarSolicitud'])
      },
      err => console.log(err)
    )
  }

}
