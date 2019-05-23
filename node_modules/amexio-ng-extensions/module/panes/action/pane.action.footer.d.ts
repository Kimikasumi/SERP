import { OnInit } from '@angular/core';
export declare class AmexioFooterComponent implements OnInit {
    className: string;
    footeralign: string;
    alignClass: string;
    footer: boolean;
    padding: string;
    constructor();
    ngOnInit(): void;
    setFooterAlignment(footeralign: string): void;
}
