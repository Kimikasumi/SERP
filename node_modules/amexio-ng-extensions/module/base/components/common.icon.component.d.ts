import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconLoaderService } from './../../services/icon/icon.service';
export declare class CommonIconComponent implements OnInit, OnChanges {
    iconLoaderService: IconLoaderService;
    key: string;
    label: string;
    onClick: EventEmitter<any>;
    customclass: string;
    iconClass: string;
    color: string;
    faiconcolor: string;
    constructor(iconLoaderService: IconLoaderService);
    ngOnInit(): void;
    getIconClass(): string;
    ngOnChanges(changes: SimpleChanges): void;
}
