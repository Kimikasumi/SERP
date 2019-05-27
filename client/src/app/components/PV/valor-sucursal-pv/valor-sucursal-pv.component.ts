import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-valor-sucursal-pv',
  templateUrl: './valor-sucursal-pv.component.html',
  styleUrls: ['./valor-sucursal-pv.component.css']
})
export class ValorSucursalPvComponent implements OnInit {

  respuesta: any
  data: any[]
  constructor( private pvService: RetailersService ) { }

  ngOnInit() {
    this.data =[['Nombre','Valor']];
    this.pvService.getValorInventarioSucursal().subscribe(
      res => {
        for (var i = 0; i < res['length']; i++){
          this.data.push([res[i].Nombre, res[i].Valor])
        }
      }
      ,
      err => console.log(err)
    )
  }

}
