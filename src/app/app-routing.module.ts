import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [{path:'login',component:LoginComponent},
                        {path:'home',component:HomeComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'dashboard',component:DashboardComponent},
                        {path:'',component:LoginComponent}
                      ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
