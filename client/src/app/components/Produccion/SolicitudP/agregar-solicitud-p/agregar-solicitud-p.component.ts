import { Component, OnInit } from '@angular/core';
import { SolicitudProd2 } from 'src/app/models/SolicitudProd';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitudP.service';

@Component({
  selector: 'app-agregar-solicitud-p',
  templateUrl: './agregar-solicitud-p.component.html',
  styleUrls: ['./agregar-solicitud-p.component.css']
})
export class AgregarSolicitudPComponent implements OnInit {

  constructor(private servicioSolicitudP: SolicitudService, private router: Router, private activedRoute: ActivatedRoute) { }

  solicitud: SolicitudProd2 = {
    cod_solicitud_presupuesto: 0,
    cod_repeticion_semanal: 0,
    desc_solicitud_presupuesto: '',
    valor_presupuesto: 0,
    area_solicitante: 'Producción',
    cod_estado: 1,
    cod_cuenta:1
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
        console.log(res);
       
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
        this.router.navigate(['/produccion/listarSolicitudP'])
      },
      err => console.log(err)
    )
  }

}
