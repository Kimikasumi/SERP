import { EventEmitter, OnInit } from '@angular/core';
import { LoadRecaptchaService } from './load.recaptcha.service';
export declare class RecaptchaComponent implements OnInit {
    private _loadRecaptchaService;
    sitekey: string;
    onSuccess: EventEmitter<any>;
    onFailure: EventEmitter<any>;
    responseStructure: any;
    componentId: any;
    constructor(_loadRecaptchaService: LoadRecaptchaService);
    ngOnInit(): void;
    rendercaptcha(): void;
}
