import { Injectable } from '@angular/core';
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  private books: Book[];

  constructor() { }

  getBooks(): Book[] {
    console.log(`BookDataService::getBooks(...)`);
    return this.books;
  }

  setBooks(books: Book[]) {
    console.log(`BookDataService::setBooks(...)`);
    this.books = books;
  }

}
