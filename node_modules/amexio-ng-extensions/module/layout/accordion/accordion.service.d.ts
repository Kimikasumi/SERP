import { Observable } from 'rxjs/index';
export declare class AccordionService {
    private subject;
    onClickEvent(data: number, parent: number): void;
    clearEvents(): void;
    getEvents(): Observable<any>;
}
