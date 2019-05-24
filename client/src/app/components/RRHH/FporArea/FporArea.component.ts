import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/services/funcionarios.service';


@Component({
  selector: 'app-FporArea',
  templateUrl: './FporArea.component.html',
  styleUrls: ['./FporArea.component.css']
})
export class FporArea implements OnInit {
  

  respuesta: any;

  pieChartData:any;
  constructor(private funcionariosService: FuncionariosService) {

  }

   getTotalFuncionarios(){
    this.funcionariosService.getTotalF().subscribe(
      res =>{
        this.respuesta=res[0].total;
        console.log(this.respuesta)
      },
      err => console.log(err)
    )

  }

  getFporModulos(cod_modulo: number){
     
    this.funcionariosService.getFporModulos(cod_modulo).subscribe(
      res =>{
        var porcentaje = res[0];
        console.log(porcentaje)
        //var porcentaje = (resultado*100)/this.respuesta
      },
      err => console.log(err)
    )

  }

  ngOnInit() {
    this.pieChartData =[['Modulo','Cantidad']];
    this.funcionariosService.getTotalF().subscribe(
      res =>{
        this.respuesta=res[0].total;
        var i;
        for (i = 1; i <= 5; i++) {
        this.funcionariosService.getFporModulos(i).subscribe(
          res =>{
            var resultado = res[0].cantidad;
            var mod = res[0].modulo;
            var porcentaje = (resultado*100)/this.respuesta
            this.pieChartData.push([mod,porcentaje]) 
            console.log(this.pieChartData)
          },
          err => console.log(err)
        )
        }
      },
      err => console.log(err)
    )
  }



}
