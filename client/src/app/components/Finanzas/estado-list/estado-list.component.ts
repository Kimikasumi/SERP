import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../../services/estado.service';

import { Estado } from 'src/app/models/estado';
@Component({
  selector: 'app-estado-list',
  templateUrl: './estado-list.component.html',
  styleUrls: ['./estado-list.component.css']
})
export class EstadoListComponent implements OnInit {
 
  estados: Estado = {};
  constructor(private estadoService: EstadoService) { }

  ngOnInit() {
    this.estadoService.getEstado().subscribe(
      res => {
        this.estados = res;
      },
      err => console.log(err)
    )
  }

}
