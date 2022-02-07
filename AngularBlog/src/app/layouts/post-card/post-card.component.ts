import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  postsData:object | undefined;
  constructor() { }

  @Input()
  postData!: object;
  ngOnInit(): void {
    console.log("Featured Posts");
    alert(this.postData);
    console.log("Featured post");
  }

}
