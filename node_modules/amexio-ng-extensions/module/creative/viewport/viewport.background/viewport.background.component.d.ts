import { AfterContentInit, OnInit } from '@angular/core';
import { AmexioImageComponent } from '../../../media/image/image.component';
import { AmexioVideoPlayerComponent } from '../../../media/video-player/video.player.component';
export declare class ViewportBackgroundComponent implements AfterContentInit, OnInit {
    imageTemplate: AmexioImageComponent;
    videoTemplate: AmexioVideoPlayerComponent;
    bgCss: string;
    imagePath: string;
    videoPath: string;
    backgroundColor: string;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
