import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { ProductComponent } from '../product/product.component';
import { CustomerComponent } from '../customer/customer.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'post', component: PostComponent },
      { path: 'product', component: ProductComponent },
      { path: 'customer', component: CustomerComponent },
      { path: '', redirectTo: 'post' , pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent} /*Wild CARD PATH*/
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
