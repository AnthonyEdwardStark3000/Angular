import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  permalink :string = '';
  imgSrc: any = './assets/place_holder.jpg';
  selectedImage : string | undefined;
  categories: Array<any>| undefined;
  postForm: FormGroup;


  constructor(private categoryService: CategoriesService, private fb: FormBuilder)
   {
      this.postForm = this.fb.group({
        title:[''],
        permalink:[''],
        excerpt:[''],
        category:[''],
        postImg:[''],
        content:['']
      })
   }

  ngOnInit(): void
  {
    this.categoryService.loadData().subscribe( val => {
      this.categories = val;
    });
  }
  onTitleChanged($event: any)
  {
    // console.log($event.target.value);
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, "-");
    console.log(this.permalink);
  }

  showPreview($event: any)
  {
    const Reader = new FileReader();
    Reader.onload = (e) =>
    {
      this.imgSrc = e.target?.result;
    }
    Reader.readAsDataURL($event.target.files[0]);
    this.selectedImage = $event.target.files[0];
  }


}
