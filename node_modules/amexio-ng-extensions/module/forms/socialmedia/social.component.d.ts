import { EventEmitter, OnInit } from '@angular/core';
export declare class AmexioSocialComponent implements OnInit {
    type: string;
    key: string;
    label: string;
    styleType: string;
    onLogin: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onLoginClick(socialUserInfo: any): void;
}
