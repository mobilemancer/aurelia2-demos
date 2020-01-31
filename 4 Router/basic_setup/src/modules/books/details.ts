import { BookService } from './../../services/bookService';
export class Details {
    public book;

    constructor(private bookService: BookService) { }

    public enter(bookId) {
        if (typeof (bookId) === "object") {
            bookId = bookId[0];
        }

        this.book = this.bookService.getBook(bookId);
    }

}
