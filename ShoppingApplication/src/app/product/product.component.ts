import { Component, OnInit } from '@angular/core';
import { Product } from './product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productName: string = "LED TV";
  message: string;
  products: Product[] = [
    { id: 1, name: "SAMSUNG", price: 10000 },
    { id: 2, name: "LG", price: 20000 },
    { id: 3, name: "SONY", price: 25000 },
    { id: 4, name: "INSIGMA", price: 30000 }
  ];

  receiveFromChild(isVisible: boolean) {
    console.log(isVisible);
  }
  messageFromChild(message: string) {
    this.message = message;
  }
  constructor() { }
  ngOnInit() {
  }

}
