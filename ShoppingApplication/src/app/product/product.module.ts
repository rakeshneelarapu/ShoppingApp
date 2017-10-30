import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/authGuard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(
      [
        { path: 'product', component: ProductComponent, canActivate: [AuthGuard]},
        { path: 'product/:id', component: ProductDetailComponent}
      ])
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
  ]
})
export class ProductModule { }
