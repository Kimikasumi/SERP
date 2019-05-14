import { OnInit } from '@angular/core';
export declare class AmexioDropDownitemsComponent implements OnInit {
    toggle: boolean;
    label: string;
    icon: string;
    labelalign: string;
    iconalign: string;
    separator: boolean;
    index: string;
    selected: boolean;
    onClick: any;
    ngOnInit(): void;
    onItemClick(clickEvent: any): void;
}
