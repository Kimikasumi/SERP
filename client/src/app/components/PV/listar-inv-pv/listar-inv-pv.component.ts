import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';

@Component({
  selector: 'app-listar-inv-pv',
  templateUrl: './listar-inv-pv.component.html',
  styleUrls: ['./listar-inv-pv.component.css']
})
export class ListarInvPvComponent implements OnInit {

  products: any = []
  constructor(private retailerService: RetailersService) { }

  ngOnInit() {
    this.mostrarProductos();
  }

  mostrarProductos() {
    this.retailerService.getProductos().subscribe(
      res => {
        console.log(res)
        this.products = res;
      },
      err => console.log(err)
    )
  }

}
