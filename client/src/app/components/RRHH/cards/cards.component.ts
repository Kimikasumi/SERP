import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { Funcionario } from 'src/app/models/Funcionario';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{

  funcionarios: any = [];

  constructor(private funcionariosService: FuncionariosService){

  }
  
  ngOnInit(){
    this.funcionariosService.getFuncionarios().subscribe(
      res => {
        console.log(res)
        this.funcionarios = res;
      },
      err => console.log(err)
    )
  }

}
