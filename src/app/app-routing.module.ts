import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {path:"dashboard", component:DashboardComponent},//creatign the dashboard routing 
  {path:"about", component:AboutComponent},//creatin the routing for the about
  {path:"", redirectTo: "dashboard", pathMatch:"full"}//makes this the landing page 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
