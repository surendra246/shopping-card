import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'payment', component: PaymentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'products/:categoryId', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
