import { Component, OnInit } from '@angular/core';
import {ProduccionService} from '../../../../services/produccion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos: any = []
  constructor(private produccionService: ProduccionService) { }
  
  ngOnInit() {
    this.darProductos();
  }

  darProductos(){
    this.produccionService.getProductos().subscribe(
      res => {
        console.log(res)
        this.productos = res;
      },
      err => console.log(err)
    )
  }

  EliminarProducto(cod_producto: string){
    console.log(cod_producto);
    
    this.produccionService.deleteProducto(cod_producto).subscribe(
      res => {
        console.log(res)
        this.darProductos();
      },
      err => console.log(err)
    )
  }


}
