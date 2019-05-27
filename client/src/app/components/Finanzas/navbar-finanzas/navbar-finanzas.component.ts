
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-finanzas',
  templateUrl: './navbar-finanzas.component.html',
  styleUrls: ['./navbar-finanzas.component.css']
})
export class NavbarFinanzasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('user')
    this.navigate()
  }
  navigate() {    
    this.router.navigateByUrl('/login');
  }

}