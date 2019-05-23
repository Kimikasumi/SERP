import { OnInit } from '@angular/core';
export declare class AmexioSideNavInnerNodeComponent implements OnInit {
    displaykey: string;
    icon: string;
    childarraykey: string;
    data: any;
    onClick: any;
    enabledrag: boolean;
    onDrag: any;
    emitNode: any;
    ngOnInit(): void;
    onNodeClick(node: any): void;
    onenterNodeClick(event: any, node: any): void;
    getOnClick(node: any): void;
    activateNode(data: any[], node: any): void;
    dragStartEvent(event: any): void;
}
