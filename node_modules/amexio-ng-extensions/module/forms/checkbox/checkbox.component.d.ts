import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validators } from '@angular/forms';
import { AmexioFormValidator } from './../form-validator/amexio.form.validator.component';
export declare class AmexioCheckBoxComponent extends AmexioFormValidator implements ControlValueAccessor, OnInit, Validators {
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    fieldlabel: string;
    disabled: boolean;
    required: boolean;
    onSelection: any;
    input: any;
    name: string;
    isValid: boolean;
    tabFocus: boolean;
    componentId: string;
    isComponentValid: any;
    constructor();
    ngOnInit(): void;
    onInput(): void;
    onClick(): void;
    value: any;
    onBlur(): void;
    onFocus(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    checkValidity(): boolean;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
    generateName(): void;
    getRandomString(): string;
}
