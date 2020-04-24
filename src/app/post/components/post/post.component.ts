import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../comment/services/comment.service';
import {CommentModel} from '../../../../models/CommentModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  // styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: PostModel;
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(
      value => value.id
    );
  }

  ngOnInit(): void {
  }

  showCommentsOfPost(post: PostModel) {
    this.commentService.getCommentsOfPost(post.id).subscribe(
      value => this.comments = value
    );
  }
}
