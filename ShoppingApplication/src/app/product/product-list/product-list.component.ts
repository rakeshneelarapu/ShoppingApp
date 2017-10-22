import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product;
  @Input() title: String = "Product List";
  @Output() isVisible = new EventEmitter<boolean>();
  @Output() message = new EventEmitter<string>();

  sendToParent() {
    this.isVisible.emit(true);
    this.message.emit('This is message from child');
  }
  constructor() { }

  ngOnInit() {
  }

}
