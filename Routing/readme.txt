Routing :=
  <router-outlet></router-outlet> should be placed to make router work
  app.routing.module.ts has the routes list , play with them

  ** routerLink="/route" to change to that router on click
  a tags dont use href to eliminate refreshing of the whole page
  applying routerLink class="active" property in active route

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

