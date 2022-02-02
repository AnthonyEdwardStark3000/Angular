import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm , FormGroup, NgModel, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  form: any;
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(5),
      ]
      ),
      email: new FormControl(),
      address: new FormControl()
    });
   }

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
