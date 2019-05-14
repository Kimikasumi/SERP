import { AfterContentInit, ElementRef, OnInit, QueryList, TemplateRef } from '@angular/core';
export declare class AmexioCarouselComponent implements AfterContentInit, OnInit {
    header: string;
    data: any;
    shuffleinterval: number;
    timeInterval: any;
    imgId: any;
    itemTemplate: TemplateRef<any>;
    templates: QueryList<any>;
    tabs: ElementRef;
    prevImage: number;
    nextImage: number;
    currImage: number;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    scrollData(): void;
    next(): void;
    previous(): void;
    shuffle(): void;
    onArrowRight(item: any): void;
    onArrowLeft(item: any): void;
    startTimeInterval(): void;
    stopTimeInterval(): void;
}
