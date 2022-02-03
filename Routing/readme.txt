Routing :=
  <router-outlet></router-outlet> should be placed to make router work
  app.routing.module.ts has the routes list , play with them

  ** routerLink="/route" to change to that router on click
  a tags dont use href to eliminate refreshing of the whole page
  applying routerLink class="active" property in active route

Router parameter: =

In the html of the component where there is data

    <h1>{{post.content}}</h1>
    <button [routerLink]="['/singlePost', index, post.title]"> View Content </button>

In the ts of the target component

ngOnInit(): void {
    this.route.paramMap.subscribe(function(value){
      console.log(value);
      let id = value.get('id');
      console.log(id)
      let title = value.get('title');
      console.log(title)
    })
  }

RouterLinkActive :=

 *** <button routerLink="/post" routerLinkActive="activeClass">Post List</button>
 .activeClass{background-color:"red"}

Angular router parameter variable :=
    send parameter along with the parameter in the view
    <div *ngFor="let post of posts; let index = index">
        <button [routerLink]="['/singlePost',index]"> View Content </button>
    </div>

Get the send data from the router :=
    import { ActivatedRoute} in the receiving ts
    inject it   constructor(private route: ActivatedRoute) { }

Observable :=
    observe a set of stream data and automatically update or track that sequence of data whenever there is something changed
  now demo with app.component.ts
    ** import { Observable } from 'rxjs';

    ngOnInit()
  {
    const obsTest$ = new Observable(function(observer){
      console.log('Printed from observer')
    }).subscribe();
  }

  every observer should always be subscribed for working. subscribe() is like calling a function after defining it .


  observer.next() :=
     It is like a function that returns somedata and it should be captured with the subscribe

   ngOnInit()
  {
    const obsTest$ = new Observable(function(observer){
      console.log('Printed from observer')
      observer.next("Value returned from the observer"); //for sending a value
    }).subscribe(function(value)
    {
        console.log(value)  //capturing the value
    });
  }

Difference between Observable and function:

  Observable can have as many return statements as needed while an function cant have that.
  Observable is a sequence of data emitted asynchronously or synchronously over a time period

Router Link Query Parameter :=
* In the component that contains data
    <button [routerLink]="['/singlePost', index , post.title]"> View Content </button>


 * In the app.component.html
    <button routerLink="/post" routerLinkActive="activeClass" [queryParams]="{page:1, orderBy:'newest'}">Post List</button>
queryParams should be passed

  * Inject in the ActivatedRoute in the component with data

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

Navigate RouterLink programmatically :=

  * <button (click)="OnSubmit()"> Submit </button>
  * Inject Router
    constructor(private router: Router){}
  *
  OnSubmit()
  {
     this.router.navigate(['/post']) //post is the link from the app-routing.module.ts
  }


WildCardRouter :=
 404 Not Found pages should navigate to not found page instead of main page

 app.router-module.ts
 {
    path:'**', component: ComponentName
  },
  //This link should always be the last link
