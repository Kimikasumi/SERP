import { Component, OnInit } from '@angular/core';
import { ProduccionService } from 'src/app/services/produccion.service';


@Component({
  selector: 'app-plazo-prod',
  templateUrl: './plazo-prod.component.html'
})
export class PlazoProd implements OnInit {
  total;
  parcial;
  public gaugeValue;
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '80': {color: 'red'}
};
  gaugeType = "semi";
  gaugeLabel = "Cumplimiento de plazos";
  gaugeAppendText = "%";
  constructor(private ProduccionService: ProduccionService) {
    
  }
  ngOnInit() {
    this.ProduccionService.getPlazos1().subscribe(
      res=>{
        this.total = res[0].total
      },
      err=>console.log(err))
    this.ProduccionService.getPlazos2().subscribe(
      res=>{
        this.parcial = res[0].parcial
        this.gaugeValue=Math.round( (this.parcial/this.total)*100 )
      },
      err=>console.log(err))
    
  }
}
