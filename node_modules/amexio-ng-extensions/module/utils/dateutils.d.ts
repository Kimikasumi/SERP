export declare class AmexioDateUtils {
    isDateEqual(d1: any, d2: any): boolean;
    isDateGreaterThenEqualTO(d1: any, d2: any): boolean;
    createDaysForMonths(selectedPeriod: any, currrentDate: any): any[];
    createDaysForWeek(selectedPeriod: any, currrentDate: any): any[];
    getMonday(date: Date): Date;
    getWeekSunday(date: Date): Date;
    getNextSunday(date: Date): Date;
    getPrevSunday(date: Date): Date;
    isBetween(date: any, startDate: any, endDate: any): boolean;
    getDateWithSecondsZero(longdate: number): any;
}
