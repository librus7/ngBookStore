import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    NgbModule,
    BookListComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
