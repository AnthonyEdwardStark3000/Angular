import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:'singlePost/:id', component: SinglepostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
