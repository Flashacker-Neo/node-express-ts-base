import { Color } from "./colorConsole";
import { Utils } from "./utils";
export class Logger {

    private source: any;
    private debugModeIsActivate: boolean = false; // Move to env variable

    constructor(source: any ) {
        this.source = source.constructor.name;
    }

    /**
     * Get if debug mode is enaled
     */
    public get isdebug(): boolean {
        return this.debugModeIsActivate;
    }

    /**
     * Print a information message in console with time and source
     * @param msg The message to print
     */
    public info(msg: string, ...values: any) {
        if (typeof msg !== 'string') console.log(this.getType(LOGTYPE.INFO), msg, ...values);
        else console.log(this.getType(LOGTYPE.INFO) + Color.colorConsole(msg), ...values);
    }

    /**
     * Print a error message in console with time and source
     * @param msg The error to print
     */
    public error(msg: string, ...values: any) {
        if (typeof msg !== 'string') console.log(this.getType(LOGTYPE.ERROR), msg, ...values);
        else console.log(this.getType(LOGTYPE.ERROR) + Color.colorConsole(msg), ...values);
    }

    /**
     * Print a debug message in console with time and source if debug mode is enabled
     * @param msg The message to print
     */
    public debug(msg: any, ...values: any) {
        if (this.debugModeIsActivate) {
            if (typeof msg !== 'string') console.log(this.getType(LOGTYPE.DEBUG), msg, ...values);
            else console.log(this.getType(LOGTYPE.DEBUG) + Color.colorConsole(msg), ...values);
        }
    }

    /**
     * Return formated time in HH:mm:ss
     */
    private getTime(): string {
        const date: Date = new Date();
        return Utils.prettyPrintTimeNumber(date.getHours()) + ':'
             + Utils.prettyPrintTimeNumber(date.getMinutes()) + ':'
             + Utils.prettyPrintTimeNumber(date.getSeconds());
    }

    /**
     * Return a string according to the LogType
     * @param type The type of log
     */
    private getType(type: LOGTYPE): string {
        let sType: string;
        switch (type) {
            case LOGTYPE.DEBUG: sType = Color.colorConsole('§yDEBUG'); break;
            case LOGTYPE.ERROR: sType = Color.colorConsole('§rERROR'); break;
            case LOGTYPE.INFO:  sType = Color.colorConsole('§gINFO'); break;
        }
        return '[' + this.getTime() + ']' + '[' + sType + ']' + '[' + Color.colorConsole('§c' + this.source) + '] ';
    }
}

export enum LOGTYPE {
    DEBUG,
    INFO,
    ERROR
}
