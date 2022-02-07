import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'', component: DashboardComponent ,canActivate: [AuthGuard]
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'category', component: CategoriesComponent ,canActivate: [AuthGuard]
  },
  {
    path:'post', component: AllPostComponent ,canActivate: [AuthGuard]
  },
  {
    path:'post/new', component: NewPostComponent ,canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
