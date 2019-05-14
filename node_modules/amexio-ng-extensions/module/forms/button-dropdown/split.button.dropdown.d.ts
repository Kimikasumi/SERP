import { AfterContentInit, QueryList } from '@angular/core';
import { AmexioButtonDropDownItemComponent } from './button.dropdown.item';
export declare class AmexioSpiltButtonDropdownComponent implements AfterContentInit {
    label: string;
    badge: number;
    openContent: boolean;
    buttons: QueryList<AmexioButtonDropDownItemComponent>;
    dropdownItemData: any[];
    type: string;
    disabled: boolean;
    size: string;
    constructor();
    ngAfterContentInit(): void;
    createDropdownItemConfig(): void;
    onClick(): void;
    itemClick(event: any, itemData: any): void;
    getBackgroundColor(): {
        'background-color': string;
    };
}
