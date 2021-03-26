export class Quote {
    showQuote: boolean;
    constructor(public id: number, public name: string, public quote: string, public author: string){
        this.showQuote = false;
    }
}
