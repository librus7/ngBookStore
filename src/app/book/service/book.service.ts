import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookDataService } from './book-data.service';
import { groupBy, mergeMap, map, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient, private bookDataService: BookDataService) { }

  fetchBooks(): Observable<Book[]> {
    const url = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    const result$ = this.httpClient.get<Book[]>(url);
    result$.subscribe((books) => {
      this.bookDataService.setBooks(books);
    });
    return result$;
  }

  fetchBooksByYear(): Observable<Book> {
    const url = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    const books$ = this.httpClient.get<Book[]>(url);
    const book$ = books$.pipe(
      mergeMap(books => from(books))
    );

    const sortedByYear$ = book$.pipe(
      groupBy(book => book.year),
      mergeMap(grouped => grouped.pipe(map(book => book)))
    );

    return sortedByYear$;
  }

  fetchBooksByTitle(): Observable<Book> {
    const url = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';
    const books$ = this.httpClient.get<Book[]>(url);
    const book$ = books$.pipe(
      mergeMap(books => from(books))
    );

    const sortedByTitle$ = book$.pipe(
      groupBy(book => book.title),
      mergeMap(grouped => grouped.pipe(map(book => book)))
    );

    return sortedByTitle$;
  }

}
