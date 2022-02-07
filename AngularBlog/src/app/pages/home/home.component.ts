import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  FeaturedPostsArray: Array<object>| undefined;
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(val =>{
      // console.log(val);
      this.FeaturedPostsArray = val;
    })
  }

}
