import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './customPipes/append.pipe';
import { SummaryPipe } from './customPipes/summarypipe.pipe';
import { PostService } from './services/post.services';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PipesComponent,
    AppendPipe,
    SummaryPipe,
    AngularFormsComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
