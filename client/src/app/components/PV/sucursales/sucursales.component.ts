import { Component, OnInit } from '@angular/core';
import { RetailersService } from 'src/app/services/retailers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucurs: any = []
  constructor(private retailerService: RetailersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
      this.retailerService.getSucursalesWithProduct(params.cod_producto).subscribe(
        res => {
          console.log(res)
          this.sucurs = res;
        },
        err => console.log(err)
    )
  }
}
