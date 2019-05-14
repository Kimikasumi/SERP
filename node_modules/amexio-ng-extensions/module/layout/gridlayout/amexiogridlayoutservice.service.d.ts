import { GridConfig } from '../../../models/GridConfig';
export declare class AmexioGridLayoutService {
    servicevar: any;
    layoutData: any[];
    devicevar: any;
    count: number;
    constructor();
    createLayout(dataLayout: GridConfig): void;
    getLayoutData(layoutName: string): any;
}
