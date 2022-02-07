import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: Array<any>| undefined;
  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.loadData().subscribe(val=>{
      this.categoryArray = val;
    });
  }

}
