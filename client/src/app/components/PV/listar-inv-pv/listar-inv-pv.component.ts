import { Component, OnInit } from '@angular/core';
import { ProduccionService } from 'src/app/services/produccion.service';

@Component({
  selector: 'app-listar-inv-pv',
  templateUrl: './listar-inv-pv.component.html',
  styleUrls: ['./listar-inv-pv.component.css']
})
export class ListarInvPvComponent implements OnInit {

  products: any = []
  constructor(private produccionService: ProduccionService) { }

  ngOnInit() {
    this.mostrarProductos();
  }

  mostrarProductos() {
    this.produccionService.getProductos().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )
  }

}
