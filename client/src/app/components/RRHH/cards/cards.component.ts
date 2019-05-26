import { Component, OnInit, HostBinding } from '@angular/core';
import { FuncionariosService } from '../../../services/funcionarios.service';
import { Funcionario, Funcionario2 } from 'src/app/models/Funcionario';
import { CuentaService } from '../../../services/cuenta.service'
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
    correo: '',
    eficacia: 10,
    ausencias: 0,
    foto: ''
    }

  @HostBinding('class') classes = 'row';
  aux:any = {
    salario:0
  }
  aux2:any = {
    saldo:0
  }
  auxNom:any
  aux2Nom:any = {
    saldo:0
  }
  funcionarios: any = [];
  constructor(
    private funcionariosService: FuncionariosService, 
    public dialog: MatDialog,
    private cuentaService: CuentaService
    ) {}

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

  pagarNomina(){
    if(confirm("Desea pagar la nomina para todos los empleados")){
        this.cuentaService.nomina().subscribe(
          res =>{
            this.auxNom = res[0].nomina
            //if(!this.auxNom.nomina){this.auxNom.nomina=0}
            if(confirm("Se removera " + this.auxNom + " de su cuenta")){
              this.cuentaService.saldo("4").subscribe(
                res => {
                    this.aux2Nom = res
                    if(this.auxNom <= this.aux2Nom.saldo){
                      let total =   this.aux2Nom.saldo - this.auxNom
                      this.cuentaService.update("3",total).subscribe(
                        res=>{
                            alert("Nomina pagada con exito")
                            location.reload(); 
                        },
                        err => alert("Error al restar la plata de la cuenta")
                      )
                    }else{
                      alert("No posee saldo suficiente en la cuenta")
                    }
                },
                err=>console.log("Cannot get saldo")
              )
            }
          },
          err => console.log(err)
        )
    }
  }

  deleteFuncionario(cedula: string) {
    if(confirm("Seguro que desea despedir al empleado?")){
    this.cuentaService.liquidacion(cedula).subscribe(
      res =>{
        this.aux = res
        if(!this.aux.salario){this.aux.salario=0}
        if(confirm("Se removera " + this.aux.salario + " de su cuenta")){
          this.cuentaService.saldo("4").subscribe(
            res => {
                this.aux2 = res
                if(this.aux.salario <= this.aux2.saldo){
                  let total =this.aux2.saldo- this.aux.salario
                  console.log(total)
                  this.cuentaService.update("3",total).subscribe(
                    res=>{
                        this.funcionariosService.deleteFuncionario(cedula).subscribe(
                        res => {
                          console.log(res);
                          this.getFuncionarios();
                        },
                        err => console.log(err)
                      )
                    },
                    err => alert("Error al restar la plata de la cuenta")
                  )
                }else{
                  alert("No posee saldo suficiente en la cuenta")
                }
            },
            err=>console.log("Cannot get saldo")
          )
        }
      },
      err => console.log(err)
    )
    
  }
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
