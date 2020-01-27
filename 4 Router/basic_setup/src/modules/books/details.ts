export class Details {
    public author: string;
    public published: number;
    public title: string;
    public genre: string;

    constructor(p) {
    }

    private enter(p) {
        this.author = p[0];
        this.genre = p[1];
        this.published = p[2];
        this.title = p[3];

    }

}