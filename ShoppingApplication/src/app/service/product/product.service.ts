import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

  products: Product[] = [
    { id: 1, name: "SAMSUNG", price: 10000 },
    { id: 2, name: "LG", price: 20000 },
    { id: 3, name: "SONY", price: 25000 },
    { id: 4, name: "INSIGMA", price: 30000 },
    { id: 1, name: "SAMSUNG", price: 10000 },
    { id: 2, name: "LG", price: 20000 },
    { id: 3, name: "SONY", price: 25000 },
    { id: 4, name: "INSIGMA", price: 30000 }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

}
