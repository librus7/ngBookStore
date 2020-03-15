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
  active: number;
  books: Book[];
  book$: Observable<Book>;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    let book$;
    switch (this.active) {
      case 1:
        book$ = this.bookService.fetchBooksByTitle();
        break;
      case 2:
        book$ = this.bookService.fetchBooksByYear();
        break;
      default:
        book$ = this.bookService.fetchBooksByTitle();
        break;
    }

    this.book$ = book$;
  }
}
