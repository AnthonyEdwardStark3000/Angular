import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {
  postArray: Array<any> | undefined;
  constructor(private postService: PostsService ) { }

  ngOnInit(): void {
    this.postService.loadData().subscribe(val =>{
      console.log(val);
      this.postArray = val;
    });
  }
  onDelete(postImgpath: any, id: any)
  {
    this.postService.deleteImage(postImgpath, id);
  }
  onFeatured(id: any, value: boolean)
  {
      const FeaturedData = {
        isFeatured: value
      }
     this.postService.markFeatured(id, FeaturedData);
  }
}
