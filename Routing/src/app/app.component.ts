import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routing';

  constructor(private router: Router){}

  ngOnInit()
  {
    const obsTest$ = new Observable(function(observer){
      console.log('Printed from observer')
      observer.next("Value returned from the observer");
    }).subscribe(function(value)
    {
        console.log(value)
    });
  }

  OnSubmit()
  {
     this.router.navigate(['/post',1,'Post Title'])
  }

}
