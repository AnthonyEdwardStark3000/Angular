import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'category', component: HomeComponent
  },
  {
    path:'post', component: SinglePostComponent
  },
  {
    path:'about', component: HomeComponent
  },
  {
    path:'terms-conditions', component: TermsAndConditionsComponent
  },
  {
    path:'contact', component: ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
