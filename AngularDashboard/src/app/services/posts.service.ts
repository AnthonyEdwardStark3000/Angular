import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage: AngularFireStorage,private afs: AngularFirestore , private toaster: ToastrService, private router: Router) { }

  // To upload the image
  uploadImage(selectedImage: any, postData: any, formStatus: any, id: any)
  {
    const filePath = `postIMG/${Date.now()}`;
    console.log(filePath);
    this.storage.upload(filePath, selectedImage).then(()=>{
      console.log("Image uploaded Successfully");
      this.storage.ref(filePath).getDownloadURL().subscribe(URL =>{
        console.log(URL);
        postData.postImgPath = URL;
        console.log(postData);
        if (formStatus == 'Edit')
        {
          this.updateData(id, postData);
          this.router.navigate(['/post'])
        }
        else
        {
          this.saveData(postData);
        }
      });
    });
  }
  // To save the data
  saveData(postData: any)
  {
    this.afs.collection('posts').add(postData).then(docRef=>{
      this.toaster.success("Data inserted Successfully..");
      this.router.navigate(["/post"]);
  })
  }

  // To load all the loaded data
  loadData()
  {
    return this.afs.collection('posts').snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, data}
      })
    }))
  }
// To Load only one edited data
  loadOneData(id: any)
  {
   return this.afs.collection('posts').doc(id).valueChanges();
  }

  //Update Data
  updateData(id:any, postData: any)
  {
    this.afs.collection('posts').doc(id).update(postData).then(()=>{
        this.toaster.success("Data updated Successfully");
        this.router.navigate(['/posts']);
    });
  }

  //Delete completely including the image

  deleteImage(postImgPath: any, id: any)
  {
    this.storage.storage.refFromURL(postImgPath).delete().then(()=>{
    this.deleteData(id);
    })
  }

  deleteData(id: any)
  {
    this.afs.collection('posts').doc(id).delete().then(()=>{
      this.toaster.warning("Data has been Deleted..");
    })
  }
}
