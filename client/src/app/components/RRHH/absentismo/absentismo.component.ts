import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';

@Component({
  selector: 'app-absentismo',
  templateUrl: './absentismo.component.html',
  styleUrls: ['./absentismo.component.css']
})
export class AbsentismoComponent implements OnInit {
  public gaugeValue;
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '80': {color: 'red'}
};
  gaugeType = "semi";
  gaugeLabel = "Absentismo";
  gaugeAppendText = "%";

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionariosService.getAusencias().subscribe(
      res =>{
        this.porcentaje = res[0].sumatoria
      
        this.funcionariosService.getTotalF().subscribe(
          res =>{
            this.totalF=res[0].total;
            if(this.totalF ==0){
              this.respuesta=0
            }else{
              this.respuesta=Math.round(this.porcentaje*10)/this.totalF
              this.gaugeValue=this.respuesta
            }
      },
      err =>console.log(err)
    )
   
  }
  )
   }


  porcentaje;
  totalF;
  respuesta;
  ngOnInit() {
    this.funcionariosService.getAusencias().subscribe(
      res =>{
        this.porcentaje = res[0].sumatoria
      
        this.funcionariosService.getTotalF().subscribe(
          res =>{
            this.totalF=res[0].total;
            if(this.totalF ==0){
              this.respuesta=0
            }else{
              this.respuesta=(this.porcentaje*10)/this.totalF
              this.gaugeValue=this.respuesta
            }
      },
      err =>console.log(err)
    )
   
  }
  )
}
}