import { Component, OnInit ,Input} from '@angular/core';
import { PostService } from './../services/post.services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  // providers: [PostService]
})
export class PostListComponent implements OnInit {

  @Input() receive:string | undefined;
  // service
  posts: Array<any>;
  constructor(private postService : PostService) {
  this.posts = postService.post;
   }

  ngOnInit(): void {
  }

}
