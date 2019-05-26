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
    this.cap=true;
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  constructor(private usuarioService:UsuarioService,private router: Router) { }
  cap=false;
  usuario: Usuario={
    cedula:0,
    contrasenia:""
  };

  ngOnInit() {
    
    if(localStorage.getItem("user")){
      var ced = localStorage.getItem("user");
      if(ced === "1234"){
        this.navigate('/workers/listado')
      }else if(ced === "1235"){
        this.navigate('/produccion/principal')
      }else if(ced === "1236"){
        this.navigate('/retail/principal')
      }
    }
  }
  clicked(){
    if(this.cap){

    
    this.usuarioService.login(this.usuario.cedula,this.usuario.contrasenia).subscribe(
      res => {
        localStorage.setItem("user",this.usuario.cedula.toString())
        var ced = this.usuario.cedula.toString()
        if(ced === "1234"){
          this.navigate('/workers/listado')
        }else if(ced === "1235"){
          this.navigate('/produccion/principal')
        }else if(ced === "1236"){
          this.navigate('/retail/principal')
        }
      },
      err => {
        this.usuario.cedula=0,
        this.usuario.contrasenia=""
        alert("Cedula o contraseña incorrecta")
      }
    )
  }else{
    alert("Debe confirmar el captcha para continuar")
  }
  }
  navigate(path) {    
    this.router.navigateByUrl(path);
  }
}
