export enum TextStyle {
    Reset = '\x1b[0m',
    Bright = '\x1b[1m',
    Dim = '\x1b[2m',
    Underscore = '\x1b[4m',
    Blink = '\x1b[5m',
    Reverse = '\x1b[7m',
    Hidden = '\x1b[8m',

    FgBlack = '\x1b[30m',
    FgRed = '\x1b[31m',
    FgGreen = '\x1b[32m',
    FgYellow = '\x1b[33m',
    FgBlue = '\x1b[34m',
    FgMagenta = '\x1b[35m',
    FgCyan = '\x1b[36m',
    FgWhite = '\x1b[37m',

    BgBlack = '\x1b[40m',
    BgRed = '\x1b[41m',
    BgGreen = '\x1b[42m',
    BgYellow = '\x1b[43m',
    BgBlue = '\x1b[44m',
    BgMagenta = '\x1b[45m',
    BgCyan = '\x1b[46m',
    BgWhite = '\x1b[47m',
}

export class Color {

    private static styles: Map<string, TextStyle> = new Map<string, TextStyle>([
        ['§reset', TextStyle.Reset],
        ['§bright', TextStyle.Bright],
        ['§dim', TextStyle.Dim],
        ['§underscore', TextStyle.Underscore],
        ['§blink', TextStyle.Blink],
        ['§reverse', TextStyle.Reverse],
        ['§hidden', TextStyle.Hidden],

        ['§n', TextStyle.FgBlack],
        ['§r', TextStyle.FgRed],
        ['§g', TextStyle.FgGreen],
        ['§y', TextStyle.FgYellow],
        ['§b', TextStyle.FgBlue],
        ['§m', TextStyle.FgMagenta],
        ['§c', TextStyle.FgCyan],
        ['§w', TextStyle.FgWhite],

        ['§N', TextStyle.BgBlack],
        ['§R', TextStyle.BgRed],
        ['§G', TextStyle.BgGreen],
        ['§Y', TextStyle.BgYellow],
        ['§B', TextStyle.BgBlue],
        ['§M', TextStyle.BgMagenta],
        ['§C', TextStyle.BgCyan],
        ['§W', TextStyle.BgWhite],
    ]);

    /**
     * Color text for print in console with key '§' ex: '§r red §b blue'
     * @param text The text you want to color
     */
    public static colorConsole(text: string): string {
        this.styles.forEach((v, k) => {
            while (text.includes(k)) {
                text = text.replace(k, v);
            }
        });
        return text + TextStyle.Reset;
    }
}