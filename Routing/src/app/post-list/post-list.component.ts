import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.route.queryParamMap.subscribe(function(value){
      console.log(value);
      let page = value.get('page');
      console.log("The page received with paramMap is :"+page);
      let order = value.get('orderBy');
      console.log("Order Received is :"+order);
    })
  }

}
