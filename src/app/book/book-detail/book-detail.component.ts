import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookDataService } from '../service/book-data.service';
import { switchMap, find, map } from 'rxjs/operators';
import { BookService } from '../service/book.service';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookItem: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.bookItem = this.bookDataService.getBooks().find((b) => b.title === params.title);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookService.fetchBooks()
          .pipe(
            map(books => books.find(book => book.title === params.title))
          )
          .subscribe(book => this.bookItem = book);
      });
  }
}
