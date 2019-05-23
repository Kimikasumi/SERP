import { AmexioGridModel } from '../module/layout/gridlayout/gridmodel.component';
export declare class GridConfig {
    amexiogridmodel: AmexioGridModel;
    devicevar: any;
    count: number;
    constructor(layoutName: string, layoutType: string);
    addlayout(layout: any[]): any;
    getLayout(): AmexioGridModel;
}
