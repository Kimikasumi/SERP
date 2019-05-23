import { PipeTransform } from '@angular/core';
export declare class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[];
}
