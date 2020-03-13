import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookDataService } from './book-data.service';

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
}
