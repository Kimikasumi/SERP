import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class AmexioCalendarDayTimeWiseComponent implements OnInit {
    headers: any[];
    calendaryData: any[];
    headerRow: ElementRef;
    onEventClicked: EventEmitter<any>;
    onHeaderClicked: EventEmitter<any>;
    width: number;
    constructor();
    ngOnInit(): void;
    eventClicked(event1: any, eventData: any): void;
    onHeaderClick(event: any): void;
    fulldate(date: Date): number;
}
