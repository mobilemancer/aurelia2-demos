import { BookService } from './../../services/bookService';

import Dune from './../../../src/assets/dune.jpg';
import DuneMessiah from './../../assets/DuneMessiah.jpg';
import ChildrenOfDune from './../../assets/ChildrenOfDune.jpg';
import GodEmperorOfDune from './../../assets/GodEmperorOfDune.jpg';
import HereticsOfDune from './../../assets/HereticsOfDune.jpg';
import ChapterhouseDune from './../../assets/ChapterhouseDune.jpg';

const bookCovers = [Dune, DuneMessiah, ChildrenOfDune, GodEmperorOfDune, HereticsOfDune, ChapterhouseDune];

export class Details {
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
