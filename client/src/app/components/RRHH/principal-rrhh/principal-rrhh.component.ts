import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal-rrhh',
  templateUrl: './principal-rrhh.component.html',
  styleUrls: ['./principal-rrhh.component.css']
})
export class PrincipalRrhhComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){this.router.navigateByUrl('/login');}
  }

}
