import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  permalink :string = '';
  imgSrc: any = './assets/place_holder.jpg';
  selectedImage : string | undefined;
  constructor() { }

  ngOnInit(): void {
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
