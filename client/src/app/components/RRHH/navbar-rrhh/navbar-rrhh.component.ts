import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaService } from '../../../services/cuenta.service'
@Component({
  selector: 'app-navbar-rrhh',
  templateUrl: './navbar-rrhh.component.html',
  styleUrls: ['./navbar-rrhh.component.css']
})
export class NavbarRrhhComponent implements OnInit {
  aux:any = {
    saldo:0
  }
  total
  constructor(private router: Router,private cuentaService: CuentaService) { }

  ngOnInit() {
    this.cuentaService.saldo("4").subscribe(
      res=>{
        this.aux=res
        this.total = this.aux.saldo
      },err=> console.log(err)
    )
  }

  logout(){
    localStorage.removeItem('user')
    this.navigate()
  }
  navigate() {    
    this.router.navigateByUrl('/login');
  }
}
