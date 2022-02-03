import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

const routes: Routes = [
  {
    path:'post', component: PostListComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'singlePost/:id/:title', component: SinglepostComponent
  },
  {
    path:'**', component: FournotfourComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
