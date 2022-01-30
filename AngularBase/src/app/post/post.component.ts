import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { PostService } from '../services/post.services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // providers: [PostService]
})
export class PostComponent implements OnInit {
  title: string ="Post component";
  postmessage: string ="Hi message sent from the post component";
  childMessage: string ="From child to parent i.e app-component";
  outputChildMessage: string = "From the child to parent using @output check app.comp.html";

  posts:Array<any>= [];

  @Input() fromparent: string | undefined;
  @Output() messageEvent = new EventEmitter<string>()

  constructor(private postService: PostService)
  {
      // let postService = new PostService();
      this.posts = postService.post;
  }

  ngOnInit(): void {
  }
  onClicked(){
    this.messageEvent.emit(this.outputChildMessage);
  }
}
