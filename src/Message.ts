const consola = require('consola');

export enum MessageVariant {
    Success,
    Error,
    Info
} 

export class Message {

    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public show(): void {
        console.log('content:',this.content);
    }

    public capitalize(): void {
        this.content = this.content[0].toUpperCase() + this.content.slice(1).toLowerCase();
    }

    public toUpperCase(): void {
        this.content = this.content.toUpperCase();
    }

    public toLowerCase(): void {
        this.content = this.content.toLowerCase();
    }

    static showColorized(variant: MessageVariant, content: string): void {
        switch (variant) {
            case MessageVariant.Success:
                consola.success( content);
                break;
            case MessageVariant.Error:
                consola.error(content);
                break;
            case MessageVariant.Info:
                consola.info(content);
                break;
            default:
                console.log('Unknown variant');
                break;
        }
    }  
}