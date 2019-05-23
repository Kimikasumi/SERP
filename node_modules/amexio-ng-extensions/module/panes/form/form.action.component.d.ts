import { AfterViewInit, OnInit, QueryList } from '@angular/core';
import { AmexioButtonGroupComponent } from './../../forms/buttongroup/button.group.component';
import { AmexioButtonComponent } from './../../forms/buttons/button.component';
export declare class AmexioFormActionComponent implements OnInit, AfterViewInit {
    padding: string;
    btns: QueryList<AmexioButtonComponent>;
    buttons: AmexioButtonComponent[];
    btngrp: QueryList<AmexioButtonGroupComponent>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
