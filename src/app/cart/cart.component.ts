import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  productItems = [
    {
      name: 'Apple',
      imageUrl: 'assets/images/apple.jpeg'
    },
    {
      name: 'Kiwi',
      imageUrl: 'assets/images/kiwi.jpeg'
    },
    {
      name: 'Orange',
      imageUrl: 'assets/images/orange.jpeg'
    },
    {
      name: 'Pear',
      imageUrl: 'assets/images/pear.jpeg'
    },    
  ]

  cartItems = []

  getChildMessage(message) {
    const index = this.cartItems.findIndex(x => x.name == message.name);
    if (index >= 0) {
      this.cartItems[index].quantity++;
    } else {
      message.quantity = 1 ;
      this.cartItems.push(message)
    }
  }

  removeItem($event) {
    console.log('>>> Remove from cart : ', $event.target.value);
    this.cartItems = this.cartItems.filter(e => e.name != $event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
