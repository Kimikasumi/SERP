import { OnInit } from '@angular/core';
import { DisplayFieldService } from '../../services/data/display.field.service';
export declare class DisplayFieldComponent implements OnInit {
    private displayFieldService;
    data: any;
    dataIndex: any;
    rowData: string;
    constructor(displayFieldService: DisplayFieldService);
    ngOnInit(): void;
    findDisplayValues(): void;
}
