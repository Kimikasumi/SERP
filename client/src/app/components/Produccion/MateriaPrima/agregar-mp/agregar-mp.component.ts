import { Component, OnInit } from '@angular/core';
import { MPrima } from 'src/app/models/MPrima';
import { MPrimaService } from 'src/app/services/m-prima.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-mp',
  templateUrl: './agregar-mp.component.html',
  styleUrls: ['./agregar-mp.component.css']
})
export class AgregarMPComponent implements OnInit {

  constructor(private servicioMPrima: MPrimaService, private router: Router, private activedRoute: ActivatedRoute) { }

  editar: boolean = false;

  mPrima: MPrima = {
    cod_m_prima: 0,
    nom_m_prima: '',
    cantidad: 0,
    precio: 0,
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.servicioMPrima.getMPrima(params.id).subscribe(
        res => {
          console.log(res)

          this.mPrima = res;
          this.editar = true
        },
        err => console.error(err)

      )
    }
  }


  GuardarMP(){
    this.servicioMPrima.saveMPrima(this.mPrima).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/produccion/listarMP'])
      },
      err => console.error(err)
    )
    console.log(this.mPrima);
  }


  actualizarMP(){
    console.log(this.mPrima)
    this.servicioMPrima.updateMPrima(this.mPrima.cod_m_prima, this.mPrima).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/produccion/listarMP'])
      },
      err => console.log(err)
    )
  }
  
}
