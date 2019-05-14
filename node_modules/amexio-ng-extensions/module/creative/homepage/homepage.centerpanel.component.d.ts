import { OnInit } from '@angular/core';
import { DeviceQueryService } from './../../services/device/device.query.service';
export declare class AmexioHomePageCenterPanelComponent implements OnInit {
    matchMediaService: DeviceQueryService;
    type: string;
    constructor(matchMediaService: DeviceQueryService);
    ngOnInit(): void;
}
