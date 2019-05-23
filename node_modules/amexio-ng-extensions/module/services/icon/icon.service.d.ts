export declare class IconLoaderService {
    iconToUse: string;
    _iconToUse: string;
    iconMappings: any[];
    constructor();
    modifyIconClass(componentKey: string, newValue: string): void;
    getIconObject(componentName: string): any;
}
