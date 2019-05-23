import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { StepBlockComponent } from './step-block';
export declare class AmexioStepsComponent implements AfterContentInit {
    private componentLoaded;
    index: boolean;
    icon: boolean;
    block: boolean;
    onClick: EventEmitter<any>;
    getStepBlockData: EventEmitter<any>;
    stepBlocks: QueryList<StepBlockComponent>;
    stepBlockArray: StepBlockComponent[];
    _data: any;
    data: any[];
    stepPreviewData: any;
    constructor();
    onStepClick(clickData: any, ev: any): void;
    ngAfterContentInit(): void;
    updateComponent(): void;
}
