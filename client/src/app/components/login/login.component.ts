import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  constructor(private usuarioService:UsuarioService,private router: Router) { }

  usuario: Usuario={
    cedula:0,
    contrasenia:""
  };

  ngOnInit() {
    if(localStorage.getItem("user")){
      this.navigate()
    }
  }
  clicked(){
    this.usuarioService.login(this.usuario.cedula,this.usuario.contrasenia).subscribe(
      res => {
        localStorage.setItem("user",this.usuario.cedula.toString())
        this.navigate()
      },
      err => console.log(err)
    )
  }
  navigate() {    
    this.router.navigateByUrl('/workers/listado');
  }
}
