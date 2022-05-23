import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private angularFirestore: AngularFirestore) { }

  addSubscriber(subscriberData){
    this.angularFirestore.collection('subscribers').add(subscriberData).then(() => {
      
    });
  }
  
  checkEmailAddressExists(subscriberEmail){
    return this.angularFirestore.collection('subscribers', ref => ref.where('email', '==', subscriberEmail)).get();
  }

}
