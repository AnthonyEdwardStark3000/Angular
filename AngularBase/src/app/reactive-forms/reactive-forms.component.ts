import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  form: any;
  constructor()
  {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

}
