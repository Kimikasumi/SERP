import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal-pv',
  templateUrl: './principal-pv.component.html',
  styleUrls: ['./principal-pv.component.css']
})
export class PrincipalPvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){this.router.navigateByUrl('/login');}
  }

}
