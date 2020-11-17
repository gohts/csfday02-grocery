import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() receivedProductItems : string;
  @Output() productToEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addQuantity(item) {
    console.log('>>> Added to cart : ', item);
    this.productToEmit.emit(item)
  }

}
