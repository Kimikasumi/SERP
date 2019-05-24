import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-rrhh',
  templateUrl: './navbar-rrhh.component.html',
  styleUrls: ['./navbar-rrhh.component.css']
})
export class NavbarRrhhComponent implements OnInit {

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
