import { Component, OnInit } from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  // styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    // all comments from resolver
    // this.comments = this.activatedRoute.snapshot.data.allComments;

    // comments of single post by postId
    // this.activatedRoute.data.subscribe(value =>
    // this.comments = value.comments
    // );
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(
      value => this.comments = value
    );
  }

}
