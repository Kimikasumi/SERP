import { AfterViewInit, OnInit } from '@angular/core';
import { DeviceQueryService } from './../../services/device/device.query.service';
export declare class AmexioHomePageEastPanelComponent implements OnInit, AfterViewInit {
    matchMediaService: DeviceQueryService;
    type: string;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
