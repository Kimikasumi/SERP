import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-cantidad-sucursal-pv',
  templateUrl: './cantidad-sucursal-pv.component.html',
  styleUrls: ['./cantidad-sucursal-pv.component.css']
})
export class CantidadSucursalPvComponent implements OnInit {

  respuesta: any
  data: any[]
  constructor(private pvService: RetailersService ) { }

  ngOnInit() {
    this.data =[['Nombre','Cantidad']];
    this.pvService.getCantidadProductoSucursal().subscribe(
      res => {
        for (var i = 0; i < res['length']; i++){
          this.data.push([res[i].Nombre, res[i].Cantidad])
        }
      }
      ,
      err => console.log(err)
    )
  }

}
