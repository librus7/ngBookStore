import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from '../service/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private _active: number;
  get active(): number {
    return this._active;
  }
  set active(value) {
    if (this._active !== value) {
      this._active = value;
      this.fetchBookList();
    }
  }

  books: Book[];
  books$: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    let books$;
    switch (this.active) {
      case 1:
        books$ = this.bookService.fetchBooksByTitle();
        break;
      case 2:
        books$ = this.bookService.fetchBooksByYear();
        break;
      default:
        books$ = this.bookService.fetchBooksByTitle();
        break;
    }

    this.books$ = books$;
  }
}
