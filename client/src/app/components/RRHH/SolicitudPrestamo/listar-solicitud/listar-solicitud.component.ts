import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitudP.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  solicitudes: any = []
  constructor(private solicitudPService: SolicitudService) { }

  ngOnInit() {
    this.getSolicitudes()
  }

  getSolicitudes(){
    this.solicitudPService.getSolicitudesP().subscribe(
      res => {
        console.log(res)
        this.solicitudes = res;
      },
      err => console.log(err)
    )
  }

  EliminarProducto(cod_solicitud_presupuesto: string){
    console.log(cod_solicitud_presupuesto);
    
    this.solicitudPService.deleteSolicitudP(cod_solicitud_presupuesto).subscribe(
      res => {
        console.log(res)
        this.getSolicitudes();
      },
      err => console.log(err)
    )
  }

}
