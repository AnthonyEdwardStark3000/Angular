import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {ToastrService} from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore , private toaster: ToastrService) { }

 //Create operation in Firebase
  saveData(data: any)
  {

    this.afs.collection('categories').add(data).then(docRef =>{
      console.log(docRef);
      this.toaster.success(' Insertion of Data successful ');
    }
    ).catch(function(err){
      console.log(err);
    })
  }

  //Read operation in Firebase

  loadData()
  {
    return this.afs.collection('categories').snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, data}
      })
    }))
  }

  updateData(id: string | undefined, EditData: any)
  {
    this.afs.collection('categories').doc(id).update(EditData).then(docRef =>{
      this.toaster.success(' Update of Data successful');
    });
  }

  deleteData(id:string | undefined)
  {
    this.afs.collection('categories').doc(id).delete().then(decRef=>{
      this.toaster.success(' Data Deleted successfully');
    });
  }
}
