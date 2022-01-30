import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  title: string ="Angular pipes";
  count: number =100920378;
  decimal: number =1009.20378;
  price: number = 99.99;
  today: Date = new Date();
  Sampleobject: object =
   {
     name:"One",
     date:this.today
   };
   postArray: Array<string>=[
     "Post 1",
     "Post 2",
     "Post 3",
     "Post 4",
     "Post 5",
   ];
   dummyText: string = "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem";
   userDetails = {
     name: "John",
     country: "India",
     state: "Tamil Nadu"
   };
  constructor() { }

  ngOnInit(): void {
  }

}
