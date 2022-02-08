import { Component, OnInit } from '@angular/core';
import { SubscribersService } from './../services/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  subscribersArray: Array<any>;
  constructor(private subServie: SubscribersService) { }

  ngOnInit(): void {
    this.subServie.loadData().subscribe(val =>{
      this.subscribersArray = val;
    })
  }
  onDelete(id: any)
  {
     this.subServie.deleteData(id);
  }

}
