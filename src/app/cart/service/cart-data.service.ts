import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cart: CartItem[] = [];

  constructor() { }

  addToCart(book: Book, quantity: number) {
    const cartItem = new CartItem();
    cartItem.book = book;
    cartItem.quantity = quantity;
    this.cart.push(cartItem);
  }
}
