import { Compiler, EventEmitter, Injector, NgModuleRef, OnInit, ViewContainerRef } from '@angular/core';
export declare class AmexioRuntimeComponent implements OnInit {
    private _compiler;
    private _injector;
    private _m;
    _container: ViewContainerRef;
    _htmlTemplate: string;
    _tsclass: any;
    htmltemplate: string;
    tsclass: any;
    oninit: EventEmitter<any>;
    constructor(_compiler: Compiler, _injector: Injector, _m: NgModuleRef<any>);
    ngOnInit(): void;
    render(): void;
}
