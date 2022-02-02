import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      id: 1,
      title: "one",
      content: "firstContent"
    },
    {
      id: 2,
      title: "two",
      content: "secondContent"
    },
    {
      id: 3,
      title: "three",
      content: "thirdContent"
    },
    {
      id: 4,
      title: "four",
      content: "fourthContent"
    },
    {
      id: 5,
      title: "five",
      content: "fifthContent"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
