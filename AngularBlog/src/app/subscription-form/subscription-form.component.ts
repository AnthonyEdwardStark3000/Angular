import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from './../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {
  isEmailError: boolean;
  isSubscribedSuccess: boolean;
  constructor(private subService: SubscribersService) { }

  ngOnInit(): void {
  }
  onSubmit(formval: any)
  {
    const subData: Sub = {
      name: formval.name,
      email: formval.email,
    };
    // console.log(formval);
    // this.subService.addSubs(subData);
    this.subService.checkSubs(subData.email).subscribe(val=>{
      if(val.empty){
        this.subService.addSubs(subData);
        this.isSubscribedSuccess = true;
      }
      else
      {
        console.log("Email is already in use");
        this.isEmailError = true;
      }
      console.log(val);
    });
  }
}
