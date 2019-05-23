import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { ValueAccessorBase } from './value-accessor';
export declare class EventBaseComponent<T> extends ValueAccessorBase<T> {
    renderer: Renderer2;
    element: ElementRef;
    private cd;
    self: boolean;
    itemClick: boolean;
    dropdownstyle: any;
    documentClickListener: any;
    constructor(renderer: Renderer2, element: ElementRef, cd: ChangeDetectorRef);
    onBaseFocusEvent(event: any): void;
    onBaseBlurEvent(event: any): boolean;
    onBaseItemClicked(): void;
    bindDocumentClickListener(): void;
    handleDocumentListener(event: any): void;
    clearClicks(): void;
    unbindDocumentClickListener(): void;
    hide(): void;
}
