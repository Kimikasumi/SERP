/**
 * Created by pratik on 18/1/18.
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class MultiMediaCarouselComponent implements OnInit, OnChanges {
    data: any;
    carouselStyle: any;
    hasDetail: boolean;
    title: string;
    onVideoLoad: EventEmitter<any>;
    elementId: any;
    right: boolean;
    left: boolean;
    currentDetailsImagePath: any;
    currentDetailsTitle: any;
    currentDetailsDesc: any;
    currentContent: any;
    videoUrl: any;
    rate: any;
    seasonNo: any;
    releaseYear: any;
    ageLimit: any;
    matchPercentage: any;
    displayDetail: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    leftClick(): void;
    rightClick(): void;
    closeDetailPage(): void;
    openDetailsSection(item: any): void;
    loadVideo(item: any): void;
    playVideo(video: any): void;
}
