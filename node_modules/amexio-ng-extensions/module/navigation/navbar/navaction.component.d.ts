import { OnInit } from '@angular/core';
export declare class AmexioNavActionComponent implements OnInit {
    type: string;
    title: string;
    icon: string;
    navLinkClick: any;
    color: string;
    constructor();
    ngOnInit(): void;
    onClick(event: any): void;
}
