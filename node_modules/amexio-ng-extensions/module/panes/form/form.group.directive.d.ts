import { AfterContentInit, QueryList } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class AmexioFormGroupDirective implements AfterContentInit {
    group: string;
    models: QueryList<NgModel>;
    modelsarray: NgModel[];
    ngAfterContentInit(): void;
}
