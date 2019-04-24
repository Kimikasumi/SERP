import { Component, OnInit, HostBinding } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { Funcionario } from 'src/app/models/Funcionario';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  funcionarios: any = [];

  constructor(private funcionariosService: FuncionariosService) {

  }

  ngOnInit() {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionariosService.getFuncionarios().subscribe(
      res => {
        console.log(res)
        this.funcionarios = res;
      },
      err => console.log(err)
    )
  }


  deleteFuncionario(cod_funcionario: string) {
    this.funcionariosService.deleteFuncionario(cod_funcionario).subscribe(
      res => {
        console.log(res);
        this.getFuncionarios();
      },
      err => console.log(err)
    )
  }


}
