import { BookService } from './../../services/bookService';

export class Books {
    public bookList = [];

    constructor(bookService: BookService) {
        this.bookList = bookService.getBooks();
    }

}
