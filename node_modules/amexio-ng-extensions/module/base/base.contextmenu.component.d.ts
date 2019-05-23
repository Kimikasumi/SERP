import { OnChanges, OnInit, Renderer2 } from '@angular/core';
export declare class AmexioContextMenuComponent implements OnInit, OnChanges {
    private renderer;
    isflagshow: boolean;
    contextmenu: any[];
    posixUp: true;
    globalClickListenFunc: () => void;
    onRightClick: any;
    rightClickData: any;
    mouseLocationLeft: number;
    mouseLocationTop: number;
    mouseLocationChangeleft: number;
    mouseLocationChangetop: number;
    contextStyle: any;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    getContextMenuStyle(): {
        'cursor': string;
        'position': string;
        'display': string;
        'left': string;
        'top': string;
        'box-shadow': string;
        'width': string;
    };
    onContextNodeClick(itemConfig: any): void;
}
