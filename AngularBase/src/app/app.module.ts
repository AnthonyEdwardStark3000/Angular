import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './customPipes/append.pipe';
import { SummaryPipe } from './customPipes/summarypipe.pipe';
import { PostService } from './services/post.services';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    PipesComponent,
    AppendPipe,
    SummaryPipe,
    AngularFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
