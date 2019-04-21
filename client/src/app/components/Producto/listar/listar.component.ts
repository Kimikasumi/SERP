import { Component, OnInit } from '@angular/core';
import {ProduccionService} from '../../../services/produccion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos: any = []
  constructor(private produccionService: ProduccionService) { }
  
  ngOnInit() {
    this.produccionService.getProductos().subscribe(
      res => {
        console.log(res)
        this.productos = res;
      },
      err => console.log(err)
    )
  }

}
