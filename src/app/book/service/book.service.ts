import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookDataService } from './book-data.service';
import { groupBy, mergeMap, map, toArray, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json';

  constructor(private httpClient: HttpClient, private bookDataService: BookDataService) { }

  fetchBooks(): Observable<Book[]> {
    const result$ = this.httpClient.get<Book[]>(this.url);
    result$.subscribe((books) => {
      this.bookDataService.setBooks(books);
    });
    return result$;
  }

  fetchBooksByYear(): Observable<Book[]> {
    const books$ = this.httpClient.get<Book[]>(this.url);
    const sortedByYear$ = books$.pipe(
      map(books => books.sort((x, y) => x.year - y.year))
    );

    return sortedByYear$;
  }

  fetchBooksByTitle(): Observable<Book[]> {
    const books$ = this.httpClient.get<Book[]>(this.url);
    const sortedByTitle$ = books$.pipe(
      map(books => books.sort((x, y) => x.title > y.title ? 1 : x.title < y.title ? -1 : 0))
    );

    return sortedByTitle$;
  }

}
