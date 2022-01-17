import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path: '' , redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'dashboard' , redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'divisi' , redirectTo:'/divisi',pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"divisi", component:DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
