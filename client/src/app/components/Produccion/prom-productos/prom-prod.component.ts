import { Component, OnInit } from '@angular/core';
import { ProduccionService } from 'src/app/services/produccion.service';


@Component({
  selector: 'app-prom-prod',
  templateUrl: './prom-prod.component.html'
})
export class PromProd implements OnInit {
  public prom;
  constructor(private ProduccionService: ProduccionService) {
    
  }
  ngOnInit() {
    this.ProduccionService.getPromedio().subscribe(
      res=>{
        this.prom = res[0].prom
        this.prom = Math.round(this.prom)
      },
      err=>console.log(err))
    
  }
}
