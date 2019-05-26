import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal-produccion',
  templateUrl: './principal-produccion.component.html',
  styleUrls: ['./principal-produccion.component.css']
})
export class PrincipalProduccionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){this.router.navigateByUrl('/login');}
  }

}
