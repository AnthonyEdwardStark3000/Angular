import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  postData: any;
  SimilarpostArray: Array<object>;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  loadSimilarPost(catId: any)
  {
  this.postService.loadsimilar(catId).subscribe(val =>{
  this.SimilarpostArray = val;
  });
  }

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.postService.countView(val['id']);
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        console.log(post);
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      });
    })

  }

}
