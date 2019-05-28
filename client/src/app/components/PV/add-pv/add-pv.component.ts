import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/Sucursal';
import { RetailersService } from 'src/app/services/retailers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pv',
  templateUrl: './add-pv.component.html',
  styleUrls: ['./add-pv.component.css']
})
export class AddPvComponent implements OnInit {

  constructor(private retailerService: RetailersService, private router: Router, private activedRoute: ActivatedRoute) { }

  editar: boolean = false;
  ciudades: any
  sucur: Sucursal = {
    cod_sucursal: 0,
    nom_sucursal: '',
    cod_ciudad: 0,
    direc: ''
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.retailerService.getOneSucursal(params.id).subscribe(
        res => {
          console.log(res)
          this.sucur = res;
          this.editar = true;
        },
        err => console.error(err)
      )
    }

    this.retailerService.getCiudades().subscribe(
      res => {
        console.log(res)
        this.ciudades = res;
      },
      err => console.log(err)
    )
  }

  createPV() {
    this.retailerService.saveRetail(this.sucur).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/retail/listadoPV'])
      },
      err => console.log(err)
    )
  }

  editPV() {
    console.log(this.sucur);
    this.retailerService.updateRetail(this.sucur.cod_sucursal, this.sucur).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/retail/listadoPV'])
      },
      err => console.log(err)
    )
  }
}
