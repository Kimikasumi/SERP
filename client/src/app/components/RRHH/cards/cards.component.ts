import { Component, OnInit, HostBinding } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { Funcionario, Funcionario2 } from 'src/app/models/Funcionario';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  pageActual: number = 1;
  selModulo: any = [];
  funcionario: Funcionario = {
    cedula: 0,
    nom_funcionario: '',
    nom_cargo: '',
    nom_modulo: '',
    nom_genero: '',
    direccion: '',
    telefono: '',
    nom_sucursal: '',
    fecha_ingreso: new Date(),
    correo: '',
    eficacia: 10,
    ausencias: 0,
    foto: ''
    }

  @HostBinding('class') classes = 'row';

  funcionarios: any = [];
  constructor(private funcionariosService: FuncionariosService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getFuncionarios();
    this.funcionariosService.getModulos().subscribe(
      res => {
        console.log(res)
        this.selModulo = res;
      },
      err => console.log(err)
    )
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

  onSelect(nom_modulo){
    let query = null;
    query = this.funcionariosService.filtroModulos(nom_modulo).subscribe(
      res =>{
        console.log("Nombre: "+nom_modulo)
        console.log("Llamado " +res)
        this.funcionarios = res;
      },
      err => console.log(err)
    )
  }

}
