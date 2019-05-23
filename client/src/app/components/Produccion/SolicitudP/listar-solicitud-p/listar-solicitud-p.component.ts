import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitudP.service';

@Component({
  selector: 'app-listar-solicitud-p',
  templateUrl: './listar-solicitud-p.component.html',
  styleUrls: ['./listar-solicitud-p.component.css']
})
export class ListarSolicitudPComponent implements OnInit {

  solicitudes: any = []
  constructor(private solicitudPService: SolicitudService) { }

  ngOnInit() {

    this.darProductos()
  }

  darProductos(){
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
        this.darProductos();
      },
      err => console.log(err)
    )
  }

}
