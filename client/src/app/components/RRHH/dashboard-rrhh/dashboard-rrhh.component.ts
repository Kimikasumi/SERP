import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import {AmexioWidgetModule,DashboardLoaderService} from "amexio-ng-extensions";
const dataUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json';
const schemaUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json';
  

  @Component({
  selector: 'app-dashboard-rrhh',
  templateUrl: './dashboard-rrhh.component.html',
  styleUrls: ['./dashboard-rrhh.component.css']
})



export class DashboardRrhhComponent implements OnInit {
    gaugeChartData:any;
  dataSource: Object;
  constructor() {
    this.gaugeChartData=[
        ['Label', 'Value'],
        ['% Ausencias', 2]
      ];
} // end of constructor
  ngOnInit() {
  }

 
}

