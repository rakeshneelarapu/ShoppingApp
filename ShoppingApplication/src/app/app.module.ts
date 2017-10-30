import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './service/product/product.service';
import { LoginService } from './service/login/login.service';
import { NewloginService } from './service/newlogin/newlogin.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostService } from './service/post/post.service';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/authGuard/auth.guard';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PageNotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    ProductModule,
    CustomerModule,
    SharedModule
  ],
  providers: [ProductService, { provide: LoginService, useClass: NewloginService }, PostService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
