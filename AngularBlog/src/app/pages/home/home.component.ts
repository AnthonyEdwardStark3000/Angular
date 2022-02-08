import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostService) {

  }
  featuredPostsArray:Array<object>;
  latestPostsArray:Array<object>;


  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(val =>{
      this.featuredPostsArray = val;
      console.log(this.featuredPostsArray)
    })
    this.postService.loadLatest().subscribe(val =>{
      this.latestPostsArray = val;
    })
  }
}
