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
  productName: string = 'LED TV';
  message: string;
  product: Product = new Product();

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
  ngOnInit() {
    this.productListComponent.productList = this.productService.getProducts();
    //this.product = this.productService.getProducts()[0];
  }

  addProduct() {
    this.productService.addProduct(this.product);
    this.productListComponent.productList = this.productService.getProducts();
  }
  constructor(private productService: ProductService) { }



  ngAfterViewInit(): void {
    console.log(this.prouductListChildren);
  }

}
