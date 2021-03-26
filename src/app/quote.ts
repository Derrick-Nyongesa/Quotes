export class Quote {
    showDetails: boolean;
    length: number;
    constructor(public id: number, public name: string, public quote: string, public author: string, public datePosted: Date){
        this.showDetails = false;
    }
}
