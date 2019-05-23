import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { EventBaseComponent } from './event.base.component';
export declare class BaseFormValidator<T> extends EventBaseComponent<T> {
    renderer: Renderer2;
    element: ElementRef;
    private _cd;
    constructor(renderer: Renderer2, element: ElementRef, _cd: ChangeDetectorRef);
}
