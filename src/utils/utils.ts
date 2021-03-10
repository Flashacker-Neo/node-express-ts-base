export class Utils {

    private static _maxTime = 10;

    /**
     * Format time for pretty print (ex: 1 -> 01)
     * @param time Number
     */
    public static prettyPrintTimeNumber(time: number): string {
        return time < this._maxTime ? ('0' + time) : String(time);
    }

}
