import { OnInit } from '@angular/core';
export declare class DockbarComponent implements OnInit {
    active: boolean;
    label: string;
    icon: string;
    mda: string;
    width: string;
    title: string;
    path: any;
    height: string;
    elementId: string;
    onBarIconClick(): void;
    constructor();
    ngOnInit(): void;
}
