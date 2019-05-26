import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboards-gerente',
  templateUrl: './dashboards-gerente.component.html',
  styleUrls: ['./dashboards-gerente.component.css']
})
export class DashboardsGerenteComponent implements OnInit {

  constructor(private router:Router) { }

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
