/**
 * Created by pratik on 18/1/18.
 */
import { EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class AmexioYoutubePlayerComponent implements OnInit {
    private sanitizer;
    name: string;
    url: any;
    height: number;
    width: number;
    onCloseVideoPlayer: EventEmitter<any>;
    sanitizedUrl: any;
    closePadding: any;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    routeBackToApp(): void;
}
