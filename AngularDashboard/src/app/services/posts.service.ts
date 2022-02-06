import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage: AngularFireStorage,private afs: AngularFirestore , private toaster: ToastrService) { }

  uploadImage(selectedImage: any, postData: any)
  {
    const filePath = `postIMG/${Date.now()}`;
    console.log(filePath);
    this.storage.upload(filePath, selectedImage).then(()=>{
      console.log("Image uploaded Successfully");
      this.storage.ref(filePath).getDownloadURL().subscribe(URL =>{
        console.log(URL);
        postData.postImgPath = URL;
        console.log(postData);
        this.saveData(postData);
      });
    });
  }
  saveData(postData: any)
  {
    this.afs.collection('posts').add(postData).then(docRef=>{
      this.toaster.success("Data inserted Successfully..");
  })
  }

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

}
