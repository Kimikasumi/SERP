import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { AmexioBorderLayoutItemComponent } from './borderlayoutitem.component';
export declare class AmexioBorderLayoutComponent implements AfterContentInit, OnInit {
    layout: QueryList<AmexioBorderLayoutItemComponent>;
    layoutitems: AmexioBorderLayoutItemComponent[];
    borderclass: string;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
