import { ElementRef, OnInit, TemplateRef } from '@angular/core';
export declare class DropDownListComponent implements OnInit {
    elementRef: ElementRef;
    template: TemplateRef<any>;
    viewdata: any;
    highlightrow: any;
    valuefield: any;
    displayfield: any;
    displayValue: any;
    itemclick: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    onDropDownListClick(event: any): void;
    scroll(rowindex: number): void;
    selectedItem(): any;
}
