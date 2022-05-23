import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
//import * as firebase  from  '@angular/fire/compat/firebase.app';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, increment, provideFirestore} from '@angular/fire/firestore';
import * as firebase from '@firebase/app';

// 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private angularFirestore: AngularFirestore) { }

  loadAllPosts(orderBy: string){
    //return this.angularFirestore.collection('posts'))
    return this.angularFirestore.collection('posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    );
  }
  
  loadFeaturedPosts(){
    //return this.angularFirestore.collection('posts'))
    return this.angularFirestore.collection('posts', ref => ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    );
  }
  
 /*
  loadLatestPosts(orderBy){
    return this.angularFirestore.collection('posts', ref => ref.orderBy(orderBy)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    );
  }
  */
  loadCategoryPosts(categoryId){
    return this.angularFirestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    );
  }
  
  loadSinglePost(postId){
    return this.angularFirestore.doc(`posts/${postId}`).valueChanges();
  }
  
  updatePostViews(postId){
    const viewsCount = {
      views: increment(1) 
      }
    this.angularFirestore.doc(`posts/${postId}`).update(viewsCount).then(() => {
    });
  }

}
