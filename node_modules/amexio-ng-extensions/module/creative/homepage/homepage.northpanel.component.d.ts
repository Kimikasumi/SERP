import { AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { AmexioNavBarComponent } from './../../navigation/navbar/navbar.component';
import { DeviceQueryService } from './../../services/device/device.query.service';
export declare class AmexioHomePageNorthPanelComponent implements OnInit, AfterViewInit {
    matchMediaService: DeviceQueryService;
    enableIcon: boolean;
    type: string;
    nothPanelIconClick: any;
    amexioNavBarComponent: AmexioNavBarComponent;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    westPanelShowHideClick(data: any): void;
}
