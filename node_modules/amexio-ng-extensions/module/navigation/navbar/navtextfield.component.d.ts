import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class AmexioNavTextFieldComponent implements ControlValueAccessor, OnInit {
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    color: string;
    constructor();
    ngOnInit(): void;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
