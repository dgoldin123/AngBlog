import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postData: any;
  categoryPostsArray: Array<object>;
  thisPostId: any;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(postId => {
      this.postsService.updatePostViews(postId.id);
      this.postsService.loadSinglePost(postId.id).subscribe(post => {
        console.log("SinglePostComponent", post);
        this.postData = post;
        this.thisLoadCategoryPosts(this.postData.category.categoryId);
        this.thisPostId = postId.id
      });
    });
  }
  
  thisLoadCategoryPosts(categoryId){
    this.postsService.loadCategoryPosts(categoryId).subscribe(posts => {
      this.categoryPostsArray = posts;
    });
  }

}
