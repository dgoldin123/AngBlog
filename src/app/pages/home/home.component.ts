import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //featuredPostsArray: Array<object>;
  featuredPostsArray: Array<object>;
  latestPostsArray: Array<object>;

  constructor(private postsService: PostsService) {
    this.postsService.loadFeaturedPosts().subscribe(featuredPosts => {
      this.featuredPostsArray = featuredPosts; 
    });

    this.postsService.loadAllPosts('createdAt').subscribe(latestPosts => {
      this.latestPostsArray = latestPosts; 
      });

  }

  ngOnInit(): void {
  }

}
