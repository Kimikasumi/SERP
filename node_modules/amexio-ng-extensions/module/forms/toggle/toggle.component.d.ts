import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { AmexioFormValidator } from './../form-validator/amexio.form.validator.component';
export declare class AmexioToggleComponent extends AmexioFormValidator implements OnInit, ControlValueAccessor, Validators {
    shape: string;
    fieldlabel: string;
    required: boolean;
    size: any;
    type: number;
    onChange: EventEmitter<any>;
    isValid: boolean;
    checked: boolean;
    componentId: string;
    toggleId: string;
    isComponentValid: any;
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    constructor();
    ngOnInit(): void;
    onToggle(): void;
    value: any;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    checkValidity(): boolean;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
    onEventFilter(event: any): void;
}
