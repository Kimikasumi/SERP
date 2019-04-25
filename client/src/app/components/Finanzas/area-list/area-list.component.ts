import { Component, OnInit } from '@angular/core';

import { Area } from 'src/app/models/area';
import { AreaService } from '../../../services/area.service';
@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
 
  areas: Area = {};
  constructor(private areaService: AreaService) { }

  ngOnInit() {
    this.areaService.getArea().subscribe(
      res => {
        this.areas=res;
      },
      err => console.log(err)
    );
  }

}
