import { SocialBaseComponent } from './../social.base.component';
import { EventEmitter, OnInit } from '@angular/core';
import { ScriptLoadService } from '../../../services/script/script.load.service';
import { LoginProvider } from './../login.provider';
import { SocialUserInfo } from './../social.user.info.model';
export declare class FacebookAuthComponent extends SocialBaseComponent implements OnInit {
    private scriptLoadService;
    loginProviderObj: LoginProvider;
    private auth2;
    isCircle: boolean;
    onLogin: EventEmitter<any>;
    constructor(scriptLoadService: ScriptLoadService);
    ngOnInit(): void;
    onButtonClick(): void;
    initialize(): Promise<SocialUserInfo>;
    getUserinfo(response: any): SocialUserInfo;
    signIn(): Promise<SocialUserInfo>;
}
