import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-valor-ciudad-pv',
  templateUrl: './valor-ciudad-pv.component.html',
  styleUrls: ['./valor-ciudad-pv.component.css']
})
export class ValorCiudadPvComponent implements OnInit {

  respuesta: any
  data: any[]
  constructor( private pvService: RetailersService ) { }

  ngOnInit() {
    this.data =[['Nombre','Valor']];
    this.pvService.getValorInventarioCiudad().subscribe(
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
