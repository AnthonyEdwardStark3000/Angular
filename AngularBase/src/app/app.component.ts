import { Component ,ViewChild , AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  posttitle = "";
  postdetails = "";
  postimageURL = "";
  siteURL = "";
  title = 'AngularBase';
  parentMessage:string ="Data from the parent component";
  message:string = "";
  fromChildOutput: string ="";
  userName = "";
  isActive: boolean = true;
  addBackground: boolean | undefined;
  names: Array<string> = ["Ajith","Vijay","Vikram","vishal"];
  users: Array<any> = [];
   objectArray: Array<any> = [
    {
      name :"Stark",
      age:21
    },
    {
      name :"Howard",
      age:21
    },
    {
      name :"Edward",
      age:21
    },
];
name :string ="";
email :string ="";
address :string ="";
switchCase: string ="";
  @ViewChild(PostComponent) childComponent: any;
  constructor(){
    console.log(this.childComponent);
  }

  ngAfterViewInit()
  {
  console.log(this.childComponent);
  this.message =this.childComponent.childMessage;
  console.log("Printing the message from child component: "+this.message);
  }

  receiveMessage($event: any)
  {
    console.log($event);
    this.fromChildOutput = $event;
  }
  Enter(value: any)
  {
    console.log(value);
    this.userName = value;
  }
  Print()
  {
    console.log(this.userName);
  }
  push()
  {
    this.objectArray.push({name: 'namePushed',age: 22});
  }
  Delete(index: number)
  {
  this.objectArray.splice(index, 1);
  }

  Case(value: string)
  {
    this.switchCase = value;
  }
  save()
  {
    this.users.push({
      "name":this.name,
      "email":this.email,
      "address":this.address
    })
    // alert("Hi");
    console.log(this.users);
  }
  deleteUser(value: number)
  {
    this.users.splice(value, 1);
  }
}
