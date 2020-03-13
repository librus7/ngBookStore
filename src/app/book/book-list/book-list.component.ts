import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    this.bookService.fetchBooks()
      .subscribe(books =>
        this.books = books
      );
  }

}
