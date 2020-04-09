import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  // styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.posts = this.activatedRoute.snapshot.data.allPosts;
  }

  ngOnInit(): void {
  }

}
