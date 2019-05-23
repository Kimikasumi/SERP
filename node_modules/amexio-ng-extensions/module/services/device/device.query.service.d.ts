export declare class DeviceQueryService {
    private platformId;
    constructor(platformId: any);
    rules: {
        print: string;
        screen: string;
        phone: string;
        tablet: string;
        desktop: string;
        portrait: string;
        landscape: string;
        retina: string;
    };
    Check: (mq: any) => boolean;
    /**********************************************
     METHODS FOR CHECKING TYPE
     **********************************************/
    IsPhone(): boolean;
    IsTablet: () => boolean;
    IsDesktop: () => boolean;
    IsPortrait: () => boolean;
    IsLandscape: () => boolean;
    IsRetina: () => boolean;
    browserWindow: () => Window;
    /**********************************************
     EVENT LISTENERS BY TYPE
     **********************************************/
    OnPhone(callBack: any): void;
    OnTablet(callBack: any): void;
    OnDesktop(callBack: any): void;
    OnPortrait(callBack: any): void;
    OnLandscape(callBack: any): void;
    mqlMethod(callBack: any, mql: any): void;
}
