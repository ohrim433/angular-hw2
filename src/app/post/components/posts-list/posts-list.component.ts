import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  // styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    // try {
    //   // get from resolver
    //   this.posts = this.activatedRoute.snapshot.data.allPosts;
    // } catch (e) {
    //   console.log(e);
    // }

    // render posts of user
    this.activatedRoute.params.subscribe(    // users/:id/posts
      value => {
        if (!!value.id) {
          this.postService.getUsersPosts(value.id).subscribe(
            posts => this.posts = posts
          );
        }
      }
    );

    this.activatedRoute.data.subscribe(
      value => {
        this.posts = value.allPosts;
      }
    );
  }

  ngOnInit(): void {
  }

}
