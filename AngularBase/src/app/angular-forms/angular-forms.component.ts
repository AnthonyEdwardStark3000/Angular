import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {

  constructor() { }

  onSubmit(f: NgForm)
  {
  console.log(f.value);
  }

  getValue(f: NgModel)
  {
      console.log(f);
  }

  ngOnInit(): void {
  }

}
