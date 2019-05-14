import { SocialBaseComponent } from './../social.base.component';
import { EventEmitter, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ScriptLoadService } from '../../../services/script/script.load.service';
import { LoginProvider } from './../login.provider';
import { SocialUserInfo } from './../social.user.info.model';
export declare class GoogleAuthComponent extends SocialBaseComponent implements OnInit {
    private meta;
    private scriptLoadService;
    loginProviderObj: LoginProvider;
    private auth2;
    onLogin: EventEmitter<any>;
    isCircle: boolean;
    constructor(meta: Meta, scriptLoadService: ScriptLoadService);
    ngOnInit(): void;
    onButtonClick(): void;
    initialize(): Promise<SocialUserInfo>;
    getLoginInUserInfo(): SocialUserInfo;
    signIn(): Promise<SocialUserInfo>;
}
