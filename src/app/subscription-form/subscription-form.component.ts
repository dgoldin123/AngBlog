import { Component, OnInit } from '@angular/core';
import { Subscription } from '../models/subscription';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  isEmailInUse: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subscribersService: SubscribersService) { }

  ngOnInit(): void {
  }

  onSubmit(subFormValue){
    const subFormData: Subscription = {
      name: subFormValue.name,
      email: subFormValue.email
    }
    this.subscribersService.checkEmailAddressExists(subFormData.email).subscribe(dupEmail => {
      //console.log(dupEmail);
      if (dupEmail.empty){
        this.subscribersService.addSubscriber(subFormData);
        this.isEmailInUse = false;
        this.isSubscribed = true;
      } else {
        //console.log('email exists');
        this.isEmailInUse = true;
      }
    });
  }

}
