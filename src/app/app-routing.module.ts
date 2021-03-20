import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//pathMatch:"full" --ana sayfa için verilir (http://localhost:4200)
  {path:"products",component:ProductComponent},          //hangi adreste ne getireceğini yazdık      (http://localhost:4200/products)
  {path:"products/category/:categoryId",component:ProductComponent},//parametre verilecekse ":" kullanılır burada "categoryId"  değişkendir
  {path:"products/add", component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
