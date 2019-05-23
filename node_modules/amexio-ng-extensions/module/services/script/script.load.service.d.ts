import { LoginProvider } from '../../forms/socialmedia/login.provider';
export declare class ScriptLoadService {
    constructor();
    loadScript(loginProviderObj: LoginProvider, onload?: any): void;
    isScriptAlreadyPresent(script: any): boolean;
}
