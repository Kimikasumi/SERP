import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { CommonDataService } from '../../services/data/common.data.service';
export declare class AmexioFileUploadComponent implements OnInit, AfterViewInit {
    dataService: CommonDataService;
    fieldlabel: string;
    httpurl: string;
    httpmethod: string;
    filetype: string;
    multiplefile: string;
    paramname: string;
    droppable: boolean;
    responseData: any;
    onRemove: EventEmitter<any>;
    onFileUpload: EventEmitter<any>;
    success: EventEmitter<any>;
    error: EventEmitter<any>;
    uploadedFiles: any[];
    dropClass: string;
    constructor(dataService: CommonDataService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    formatBytes(bytes: number, decimals: any): string;
    onFileDrop(event: any): void;
    onDragOver(event: any): void;
    closeFile(filedata: any, index: any): void;
    uploadFile(event: any, singleFile: boolean): void;
    serviceCall(event: any): void;
    uploadService(formData: FormData): void;
}
