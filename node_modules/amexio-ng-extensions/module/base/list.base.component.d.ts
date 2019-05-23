import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { BaseInput } from './base.input.component';
export declare class ListBaseComponent<T> extends BaseInput<T> {
    private renderer;
    element: ElementRef;
    private cd;
    self: boolean;
    itemClick: boolean;
    dropdownstyle: any;
    documentClickListener: any;
    constructor(renderer: Renderer2, element: ElementRef, cd: ChangeDetectorRef);
    onFocusEvent(event: any): void;
    blur(event: any): void;
    itemClicked(): void;
    bindDocumentClickListener(): void;
    handleDocumentListener(event: any): void;
    clearClicks(): void;
    unbindDocumentClickListener(): void;
    hide(): void;
}
