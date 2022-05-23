import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  categoryPostsArray: Array<object>;
  categoryObj: any;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(catId => {
      console.log("catId", catId);
      this.categoryObj = catId;

      this.postsService.loadCategoryPosts(catId.id).subscribe(catPosts => {
        this.categoryPostsArray = catPosts
      });
    });
  }

}
