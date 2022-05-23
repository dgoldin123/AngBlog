import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() postData: Post; //object;

  constructor() { }

  ngOnInit(): void {
    //this.postData2 = JSON.stringify(this.postData);
    //console.log("this.postData", this.postData);
    //console.log("this.postData2", this.postData2);
  }

}
