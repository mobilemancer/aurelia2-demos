import { BookService } from '../../../services/bookService';
import * as covers from '../../../assets/index';

const bookCovers =
    [covers.dune, covers.duneMessiah,
    covers.childrenOfDune, covers.godEmperorOfDune,
    covers.hereticsOfDune, covers.chapterhouseDune];

export class DetailsView {
    public book;
    public cover;

    constructor(private bookService: BookService) { }

    public enter(bookId) {
        if (typeof (bookId) === "object") {
            bookId = bookId[0];
        }

        this.book = this.bookService.getBook(bookId);

        this.cover = bookCovers[bookId - 1];
    }
}
