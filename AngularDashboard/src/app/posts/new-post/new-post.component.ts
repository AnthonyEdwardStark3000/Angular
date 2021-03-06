import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from './../../models/post';

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
  post: any;
  postForm!: FormGroup;
  formStatus: string ="Add New";
  docId: any;

  constructor(private categoryService: CategoriesService, private fb: FormBuilder,private postService: PostsService, private route: ActivatedRoute)
   {
     this.route.queryParams.subscribe(val =>{
       this.docId = val['id'];
       if(this.docId)
       {
        this.postService.loadOneData(val['id']).subscribe(post=>{
          this.post = post;
          this.postForm = this.fb.group({
            title:[this.post.title,[Validators.required,Validators.minLength(10)]],
            permalink:[this.post.permalink,Validators.required],
            excerpt:[this.post.excerpt,[Validators.required,Validators.minLength(50)]],
            category:[`${this.post.category.categoryId}-${this.post.category.category}`,Validators.required],
            postImg:['',Validators.required],
            content:[this.post.content,Validators.required]
          })
          this.imgSrc = this.post.postImgPath;
          this.formStatus = "Edit";
        })
       }
       else
       {
        this.postForm = this.fb.group({
          title:['',[Validators.required,Validators.minLength(10)]],
          permalink:['',Validators.required],
          excerpt:['',[Validators.required,Validators.minLength(50)]],
          category:['',Validators.required],
          postImg:['',Validators.required],
          content:['',Validators.required]
        })
       }
      // console.log(val);
     })

   }

  ngOnInit(): void
  {
    this.categoryService.loadData().subscribe( val => {
      this.categories = val;
    });
  }

  get fc()
  {
    return this.postForm.controls;
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

  onSubmit()
  {
      // console.log(this.postForm.value);
     let splitted = this.postForm.value.category.split("-");
      const postData: Post = {
          title: this.postForm.value.title,
          permalink: this.postForm.value.permalink,
          category: {
            categoryId: splitted[0],
            category: splitted[1]
          },
          postImgPath: '',
          excerpt: this.postForm.value.excerpt,
          content: this.postForm.value.content,
          isFeatured: false,
          views: 0,
          status: 'new',
          createdAt: new Date()
        }
          console.log(postData);
      this.postService.uploadImage(this.selectedImage, postData, this.formStatus, this.docId);
      this.postForm.reset();
      this.imgSrc = './assets/place_holder.jpg';
          }
  }
