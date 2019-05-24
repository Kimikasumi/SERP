import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-listar-pv',
  templateUrl: './listar-pv.component.html',
  styleUrls: ['./listar-pv.component.css']
})
export class ListarPvComponent implements OnInit {

  sucurs: any = []
  constructor(private retailerService: RetailersService) { }

  ngOnInit() {
    this.mostrarSucursales();
  }

  mostrarSucursales() {
    this.retailerService.getSucursales().subscribe(
      res => {
        console.log(res)
        this.sucurs = res;
      },
      err => console.log(err)
    )
  }

  eliminarPV(cod_retail: string) {
    console.log(cod_retail);
    this.retailerService.deleteRetail(cod_retail).subscribe(
      res => {
        console.log("se elimino " + cod_retail);
        console.log(res);
        this.mostrarSucursales();
      },
      err => console.log(err)
    )
  }
}
