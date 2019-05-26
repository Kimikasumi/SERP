import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-pv',
  templateUrl: './navbar-pv.component.html',
  styleUrls: ['./navbar-pv.component.css']
})
export class NavbarPvComponent implements OnInit {

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
