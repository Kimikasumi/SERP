import { OnInit, QueryList } from '@angular/core';
import { AmexioButtonComponent } from '../buttons/button.component';
import { AmexioDropDownComponent } from '../dropdown/dropdown.component';
import { AmexioLabelComponent } from '../label/label.component';
export declare class ToolBarActionComponent implements OnInit {
    queryDropDown: QueryList<AmexioDropDownComponent>;
    dropdown: AmexioDropDownComponent[];
    queryButton: QueryList<AmexioButtonComponent>;
    button: AmexioButtonComponent[];
    queryLabel: QueryList<AmexioLabelComponent>;
    label: AmexioLabelComponent[];
    type: string;
    title: string;
    navLinkClick: any;
    actionComponent: any;
    constructor();
    ngOnInit(): void;
    onClick(clickEvent: any): void;
    checkActionComponent(): void;
}
