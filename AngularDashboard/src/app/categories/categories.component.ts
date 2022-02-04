import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from './../services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryArray: Array<any>| undefined;
  formCategory: string | undefined;
  formStatus: string = "Add";
  categoryId: string| undefined;
  // constructor(private afs: AngularFirestore) { }
  constructor(private categoryService :CategoriesService){} //Performing crud using services file

  ngOnInit(): void {
    this.categoryService.loadData().subscribe( val =>{
      console.log(val);
      this.categoryArray = val;
    });
  }

  onSubmit(formData: any)
  {
    console.log("Hi");

    let categoryData :Category = {
      category: formData.value.category,
    }

    if(this.formStatus == "Add")
    {

    // let subcategoryData = {
    //   subcategoryData: 'subcategory1',
    // }
    console.log(categoryData);


    // this.afs.collection('categories').add(categoryData).then(docRef =>{
    //   console.log(docRef);


    //   //inserting a sub data to the main data
    //   this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subcategoryData).then(docRef1 =>{
    //     console.log(docRef1);
    //   }
    //   )

    // }
    // ).catch(function(err){
    //   console.log(err);
    // })

    this.categoryService.saveData(categoryData);
    formData.reset(); // to clear the text in the form input after submission
    }
    else if(this.formStatus == "Edit")
    {
      // alert("Edit");
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus = "Add";
    }
  }

  onEdit(category:any, id: any)
  {
    // alert(id);
    this.formCategory = category;
    this.formStatus = "Edit";
    this.categoryId = id;
    // alert(this.categoryId);
  }
  onDelete(id: any)
  {
    // alert(id);
    this.categoryService.deleteData(id);
  }
}
