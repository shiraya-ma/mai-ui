/* eslint-disable */
'use strict';
import { MaiLogger } from "@shiraya-ma/mai-logger";

class Logger extends MaiLogger {
    private readonly _tag = [
        '%c[MaiUI]%c',
        '#3aa698',
        'inherit',
    ];

    /**
     * Methods to output debug logs
     * 
     * @param message 
     * @returns 
     */
    public debug (...messages: any) {
        const _messages: any[] = this._tag.concat(messages);

        super.debug(..._messages);        
    }

    /**
     * Methods to output error logs
     * 
     * @param message 
     * @returns 
     */
    public error (...messages: any) {
        const _messages: any[] = this._tag.concat(messages);

        super.error(..._messages);  
    }

    /**
     * Methods to output information logs
     * 
     * @param message 
     * @returns 
     */
    public info (...messages: any) {
        const _messages: any[] = this._tag.concat(messages);

        super.info(..._messages);  
    }

    /**
     * Methods to output trace logs
     * 
     * @param message 
     * @returns 
     */
    public trace (...messages: any) {
        const _messages: any[] = this._tag.concat(messages);

        super.trace(..._messages);   
    }

    /**
     * Methods to output warning logs
     * 
     * @param message 
     * @returns 
     */
    public warn (...messages: any) {
        const _messages: any[] = this._tag.concat(messages);

        super.warn(..._messages);    
    }
};

export const log = new Logger({level: process.env.NODE_ENV === 'development'? 'TRACE': 'INFO'});
