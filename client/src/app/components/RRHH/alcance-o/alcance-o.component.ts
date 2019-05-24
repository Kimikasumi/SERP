import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-alcance-o',
  templateUrl: './alcance-o.component.html',
  styleUrls: ['./alcance-o.component.css']
})
export class AlcanceOComponent implements OnInit {
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '80': {color: 'red'}
};
  animacion=false;
  gaugeType = "semi";
  public gaugeValue;
  gaugeLabel = "Eficacia";
  gaugeAppendText = "%";

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionariosService.getEficacia().subscribe(
      res =>{
        this.porcentaje = res[0].sumatoria
        this.funcionariosService.getTotalF().subscribe(
          res =>{
            this.totalF=res[0].total;
            if(this.totalF ==0){
              this.respuesta=0
            }else{
              this.respuesta=(this.porcentaje/this.totalF)*10
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

}
}
