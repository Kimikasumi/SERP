import { AfterContentInit, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ViewportBackgroundComponent } from '../viewport.background/viewport.background.component';
import { ViewportContentBodyComponent } from '../viewport.content.body/viewport.content.body.component';
export declare class ViewportContentComponent implements OnInit, AfterContentInit, AfterViewInit {
    videoId: ElementRef;
    bgImageTemplate: ViewportBackgroundComponent;
    contentTemplate: ViewportContentBodyComponent;
    constructor();
    backgroundCss: string;
    contentCount: number;
    height: string;
    bgvid: any;
    scrollable: boolean;
    internalScroll: boolean;
    backgroundColor: string;
    tempUrl: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    playVideo(): void;
    insertStyleSheetRule(ruleText: any): void;
}
