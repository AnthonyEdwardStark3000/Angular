import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  // constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }
  onSubmit(formData: any)
  {
    let categoryData = {
      category: formData.value.category,
    }
    console.log(categoryData);

    // this.afs.collection('categories').add(categoryData).then(function(docRef){
    //   console.log(docRef);
    // }).catch(function(err){
    //   console.log(err);
    // })
  }
}
