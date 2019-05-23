import { OnInit } from '@angular/core';
export declare class AmexioProgressCEComponent implements OnInit {
    type: string;
    size: string;
    background: string;
    labelcolor: string;
    progresscolor: string;
    inactiveprogresscolor: string;
    unit: string;
    label: string;
    height: string;
    width: string;
    progressvalue: number;
    tooltip: string;
    showlabel: boolean;
    showunit: boolean;
    firstProgressBarColor: any;
    secondProgressBarColor: any;
    thirdProgressBarColor: any;
    pStyle: any;
    outerWidth: any;
    outerHeight: any;
    progressBarDegreeMap: Map<any, any>;
    constructor();
    ngOnInit(): void;
    dyanmicHeightCreation(): void;
    getCal(value: any): any;
}
