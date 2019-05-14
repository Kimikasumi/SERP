import { Observable } from 'rxjs/index';
export declare class ChartLoaderService {
    private chartPackage;
    isScriptLoading: boolean;
    private googleScriptLoadingNotifier;
    constructor();
    loadCharts(chartName: string): Observable<any>;
    loadScript(): Observable<any>;
    /**
     * Load Base Chart
     * @param observer
     */
    loadBaseChart(observer: any): void;
    /**
     * Load the required charts
     * @param chartName
     */
    loadRequiredChart(observer: any, chartName: string): void;
}
