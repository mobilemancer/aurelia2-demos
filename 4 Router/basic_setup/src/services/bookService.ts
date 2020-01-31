export class BookService {


    private books =
        [
            {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 1,
                published: 1965,
                title: 'Dune'
            }, {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 2,
                published: 1969,
                title: 'Dune Messiah'
            }, {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 3,
                published: 1976,
                title: 'Children of Dune'
            }, {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 4,
                published: 1981,
                title: 'God Emperor of Dune'
            }, {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 5,
                published: 1984,
                title: 'Heretics of Dune'
            }, {
                author: 'Frank Herbert',
                genre: 'Science Fiction',
                id: 6,
                published: 1985,
                title: 'Chapterhouse: Dune'
            }
        ];

    public getBooks() {
        return this.books;
    }

    public getBook(bookId: number): any {
        return this.books[bookId];
    }
}
