import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { ProductComponent } from '../product/product.component';
import { CustomerComponent } from '../customer/customer.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/authGuard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
      // { path: 'product', component: ProductComponent, canActivate: [AuthGuard]},
      // { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent } /*Wild CARD PATH*/
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
