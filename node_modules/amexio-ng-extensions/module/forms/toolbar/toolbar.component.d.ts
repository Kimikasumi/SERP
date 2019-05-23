import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { ToolbaroneComponent } from './toolbarone.component';
export declare class ToolbarComponent implements AfterContentInit, OnInit {
    className: string;
    seperator: boolean;
    toolbarposition: string;
    onClick: any;
    tabLocalData: any;
    tabPreviewData: any;
    constructor();
    queryTool: QueryList<ToolbaroneComponent>;
    toolCollection: ToolbaroneComponent[];
    ngOnInit(): void;
    ngAfterContentInit(): void;
    getToolbaritemposition(position: any): any;
    onToolClick(tool: any): void;
    getSeperatotClass(toolnode: any): any;
    getToolbarPosition(): string;
}
