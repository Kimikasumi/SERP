import { OnInit } from '@angular/core';
export declare class AmexioVideoPlayerComponent implements OnInit {
    path: any;
    extension: any;
    width: any;
    rederVideo: boolean;
    videoPlayer: any;
    progressBar: any;
    volumebar: any;
    isPlaying: boolean;
    isMuted: boolean;
    currentVolume: number;
    constructor();
    ngOnInit(): void;
    onVolumeChange(event: any): void;
    updateMuteUI(): void;
    onPlay(): void;
    onTimeUpdate(): void;
    replayVideo(): void;
    resetPlayer(): void;
    onFullScreen(): void;
    onMute(): void;
}
