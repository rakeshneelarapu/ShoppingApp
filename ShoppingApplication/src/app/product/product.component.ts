import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../service/product/product';
import { ProductService } from '../service/product/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  productName: string = "LED TV";
  message: string;

  //productService = new ProductService();

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  @ViewChildren(ProductListComponent)
  prouductListChildren: QueryList<ProductListComponent>;

  receiveFromChild(isVisible: boolean) {
    console.log(isVisible);
  }
  messageFromChild(message: string) {
    this.message = message;
  }
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productListComponent.productList = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    console.log(this.prouductListChildren);
  }

}
