import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';
import { NewloginService } from './service/newlogin/newlogin.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, {provide: LoginService, useClass: NewloginService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
