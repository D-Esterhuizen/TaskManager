import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './productPage/productPage.component';

import { EditProductComponent } from './edit-product/edit-product.component'; 
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [

  {path:"productPage", component:ProductPageComponent},//creating the dashboard routing 
  {path:"addProduct", component:AddProductComponent},//creatin the routing for the about
  {path:"edit-product/:id", component:EditProductComponent},//creating the routing for the edit product
  {path:"", redirectTo: "productPage", pathMatch:"full"},//makes this the landing page 
  { path: "**", redirectTo: '/productPage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
