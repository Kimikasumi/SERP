import { EventEmitter, OnInit } from '@angular/core';
export declare class AmexioButtonDropDownItemComponent implements OnInit {
    label: string;
    badge: number;
    disabled: boolean;
    icon: string;
    onClickRoute: string;
    iconStyleClass: string;
    onItemClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
