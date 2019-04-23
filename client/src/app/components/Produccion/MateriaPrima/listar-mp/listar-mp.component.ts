import { Component, OnInit } from '@angular/core';
import { MPrimaService } from 'src/app/services/m-prima.service';

@Component({
  selector: 'app-listar-mp',
  templateUrl: './listar-mp.component.html',
  styleUrls: ['./listar-mp.component.css']
})
export class ListarMPComponent implements OnInit {

  mPrima: any = []
  constructor(private mPrimaService: MPrimaService) { }

  ngOnInit() {
    this.darMPrima();
  }


  darMPrima(){
    this.mPrimaService.getMPrimas().subscribe(
      res => {
        console.log(res)
        this.mPrima = res;
      },
      err => console.log(err)
    )
  }

  EliminarMP(cod_m_prima: string){
    console.log(cod_m_prima);
    
    this.mPrimaService.deleteMPrima(cod_m_prima).subscribe(
      res => {
        console.log("AAAAAAAAAAAAAAAAAAAA")
        console.log(res)
        this.darMPrima();
      },
      err => console.log(err)
    )
  }
}
