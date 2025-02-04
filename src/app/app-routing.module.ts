import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderProductComponent } from './components/order-product/order-product.component';
import { ReviewsComponent } from './components/review/review.component';
const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'order-product', component: OrderProductComponent },
  { path: 'reviews/:id', component: ReviewsComponent } // Route for Reviews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }