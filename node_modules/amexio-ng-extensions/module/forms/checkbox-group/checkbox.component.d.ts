import { OnInit } from '@angular/core';
import { AmexioCheckBoxGroupComponent } from './checkbox.group.component';
export declare class CheckboxComponent implements OnInit {
    private checkboxGroup;
    private onTouchedCallback;
    private onChangeCallback;
    label: any;
    value: any;
    name: any;
    checked: boolean;
    tabFocus: boolean;
    disabled: boolean;
    componentId: string;
    constructor(checkboxGroup: AmexioCheckBoxGroupComponent);
    toggleCheck(): void;
    isChecked(): boolean;
    onBlur(): void;
    onFocus(): void;
    ngOnInit(): void;
    createCompId(inputType: any, name: any): string;
}
