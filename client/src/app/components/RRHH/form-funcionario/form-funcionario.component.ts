import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { Funcionario2 } from 'src/app/models/Funcionario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {

  selCargo: any = [];
  selModulo: any = [];
  funcionario: Funcionario2 = {
    cod_funcionario: 0,
    nom_funcionario: '',
    cod_cargo: 0,
    cod_modulo: 0,
    cod_genero: 0,
    direccion: '',
    telefono: '',
    cedula: '',
    fecha_ingreso: new Date(),
    correo: '',
    eficacia: 10,
    ausencias: 0,
    foto: ''
  }

  edit: boolean = false;
  constructor(private funcionariosService: FuncionariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.cod_funcionario) {
      this.funcionariosService.getFuncionario(params.cod_funcionario).subscribe(
        res => {
          console.log(res);
          this.funcionario = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }


    this.funcionariosService.getCargos().subscribe(
      res => {
        console.log(res)
        this.selCargo = res;
      },
      err => console.log(err)
    )
    this.funcionariosService.getModulos().subscribe(
      res => {
        console.log(res)
        this.selModulo = res;
      },
      err => console.log(err)
    )
  }

  agregarNuevoFuncionario() {
    delete this.funcionario.fecha_ingreso;
    delete this.funcionario.cod_funcionario;
    delete this.funcionario.ausencias;
    delete this.funcionario.eficacia;
    console.log(this.funcionario);
    if (this.funcionario.foto = '' && (this.funcionario.cod_genero = 1)) {
      console.log('Entra')
      this.funcionario.foto = 'assets/perfilH.jpg'
    } else if (this.funcionario.foto = '' && (this.funcionario.cod_genero = 2)) {
      this.funcionario.foto = 'assets/perfilM.jpg'
    }
    this.funcionariosService.saveFuncionario(this.funcionario).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/workers/listado']);
      },
      err => console.log(err)
    )
  }

  updateFuncionario(){
    delete this.funcionario.fecha_ingreso;
    this.funcionariosService.updateFuncionario(this.funcionario.cod_funcionario, this.funcionario).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/workers/listado']);
      },
      err => console.log(err)
    )
  }
}
