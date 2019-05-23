import { OnInit } from '@angular/core';
export declare class AmexioChipComponent implements OnInit {
    icon: string;
    label: any;
    color: any;
    badge: any;
    fontcolor: string;
    displayfield: any;
    item: any;
    closable: false;
    closeClick: any;
    labelClick: any;
    index: string;
    selected: boolean;
    constructor();
    onCloseClick(event: any): void;
    onLabelClick(event: any): void;
    ngOnInit(): void;
}
