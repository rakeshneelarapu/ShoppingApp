import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product/product.service';
import { Product } from './service/product/product';
import { LoginService } from './service/login/login.service';
import { User } from './service/login/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  product: Product;
  productList: Product[];
  user: User;
  constructor(private productService: ProductService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.user = { userName: 'admin', password: 'admin'};
    this.loginService.login(this.user);
  }
  addProduct() {
    this.product = { id: 3, name: 'Bose', price: 50000 };
    this.productService.addProduct(this.product);
    this.getProducts();
  }

  getProducts() {
    this.productList = this.productService.getProducts();
  }
}
