import { Component, OnInit } from '@angular/core';
import { SolicitudInvService } from 'src/app/services/solicitud-inv.service';
import {SolicitudInv} from 'src/app/models/solicitud_inv'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-listar-srecibidas',
  templateUrl: './listar-srecibidas.component.html',
  styleUrls: ['./listar-srecibidas.component.css']
})
export class ListarSRecibidasComponent implements OnInit {
  solicitudes: any=[];
  solicitudesFiltradas: any=[];
  solicitudesNormal: any=[];
  solicitud: SolicitudInv={
    cod_solicitud: 0,
    cod_sucursal: 0,
    cod_producto: 0,
    cantidad: 0,
    cod_estado:0

  }
  constructor(private solicitudInvService: SolicitudInvService,private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.getSolicitudesRecibidas();
    this.obtenernormal();
   

  }
  getSolicitudesRecibidas(){
    this.solicitudesFiltradas=[];
    this.solicitudInvService.getSolicitudesInv().subscribe(
      res=>{
        console.log(res);
        this.solicitudes=res;
        console.log(this.solicitudes.length)
        console.log(this.solicitudes[1])
        for (let i = 0; i < this.solicitudes.length; i++) {
            
          if (this.solicitudes[i].nom_estado_solicitud=="Pendiente") {
            
            this.solicitudesFiltradas.push(this.solicitudes[i]);
          }
          
        }
      },
      err=>console.log(err)

    )
    
  
  }
  obtenernormal(){
    this.solicitudInvService.getSolicitudesnormalInv().subscribe(
      res=>{
        this.solicitudesNormal=res;
      }
    )
  }
  denegarSolicitudRecibida(id: string){
    var parar: boolean=true;
    
    for (let i = 0; i < this.solicitudesNormal.length && parar; i++) {
      console.log('entre al for denegar')
    if (this.solicitudesNormal[i].cod_solicitud==id) {
      console.log('entre al if denegar');
      this.solicitud=this.solicitudesNormal[i];
      console.log(this.solicitud)
      parar=false;
    }
  }
  this.solicitud.cod_estado=3;
  this.solicitudInvService.updateSolicitudInv(this.solicitud.cod_solicitud,this.solicitud).subscribe(
    res=>{
      console.log(res);
      this.getSolicitudesRecibidas();
    },
    err=>console.log(err)
  )
  }


  
  aceptarSolicitudRecibida(id: string){
    var parar: boolean=true; 
    for (let i = 0; i < this.solicitudesNormal.length && parar; i++) {
      console.log('entre al for aceptar')
    if (this.solicitudesNormal[i].cod_solicitud==id) {
      console.log('entre al if aceptar');
      this.solicitud=this.solicitudesNormal[i];
      console.log(this.solicitud)
      parar=false;
    }
  }
  this.solicitud.cod_estado=2;
  this.solicitudInvService.updateSolicitudInv(this.solicitud.cod_solicitud,this.solicitud).subscribe(
    res=>{
      console.log(res);
      this.getSolicitudesRecibidas();
    },
    err=>console.log(err)
  )
  }

}
