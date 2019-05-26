import { Component, OnInit } from '@angular/core';
import { MPrimaService } from 'src/app/services/m-prima.service';


@Component({
  selector: 'app-mp-anio',
  templateUrl: './mp-anio.component.html'
})
export class MpAnio implements OnInit {
  barChartData:any;
  constructor(private mPrimaService: MPrimaService) {
    this.barChartData=[]
    this.barChartData.push(["Fecha","Cantidad"])
  }
  ngOnInit() {
    this.mPrimaService.getMPrimasAnio().subscribe(
      res=>{
        for (var clave in res){
          if(res.hasOwnProperty(clave)){
            var aux:any = [res[clave].fecha,res[clave].cantidad]
            this.barChartData.push(aux)
          }
        }
        console.log("Chart2")
        console.log(this.barChartData)
      },
      err=>console.log(err))
  }
}
