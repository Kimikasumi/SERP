import { Component, OnInit, HostBinding } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  funcionarios: any = [];
  constructor(private funcionariosService: FuncionariosService, public dialog: MatDialog) {

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


  deleteFuncionario(cedula: string) {
    this.funcionariosService.deleteFuncionario(cedula).subscribe(
      res => {
        console.log(res);
        this.getFuncionarios();
      },
      err => console.log(err)
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( CardsComponent,{
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
